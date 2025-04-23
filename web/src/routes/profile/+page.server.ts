import { redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { database_connection_environment } from "$lib/database";
import type { Id, RecordResponce } from "$lib/models";
import type { User } from "$lib/models/user";
import { RecordId } from "surrealdb";

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
  const token = cookies.get('token')!;

  const user = await database_connection_environment(
    async (data) => {
      const { db } = data;

      await db.authenticate(token).catch(() => {
        throw redirect(301, '/login');
      });

      const info: User = (await db.info<User>())!;

      return {
        name: info.name,
        surname: info.surname,
        email: info.email
      };
    }
  )

  return user;
}
