import EnvironmentVariable from "./helpers/Environment.ts";
import type { IDatabase } from "./idatabase.ts";
import SurrealDB from "./SurrealDB.ts";
import * as oak from "jsr:@oak/oak";

const db: IDatabase  = new SurrealDB(
  new EnvironmentVariable("DATABASE_ADRESS").get(),
  new EnvironmentVariable("DATABASE_PORT").get()
);

const app_state: {
  database: IDatabase,
  cache?: undefined, //!!!
  port: number
} = {
  database: db,
  port: Number(new EnvironmentVariable("APP_PORT").get()),
}


const router = new oak.Router();

const app = new oak.Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({
  port: app_state.port
});

console.log(`Server listening on ${app_state.port}`);
