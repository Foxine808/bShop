import { Surreal } from "jsr:@surrealdb/surrealdb";
import type { IDatabase } from "./idatabase.ts";

export default class SurrealDB implements IDatabase {
  private db!: Surreal;

  constructor(address: string, port: string) {
    const result = async () => {
      this.db = new Surreal();

      const url = `http://${address}:${port}/rpc`;

      console.log(`Connecting to SurrealDB instance at '${url}'`);

      await this.db.connect(url)
        .catch((e) => {
          console.error("Cant connect to SurreadDB instance");
          throw e;
        });

      await this.db.use({
        database: 'bShop'
      });

      await this.db.signin({
        username: 'root',
        password: 'root'
      });
    };

    result()
      .then(() => {
        console.log(`Established connection with SurrealDB database at ${address}:${port}`)
      });
  }
}
