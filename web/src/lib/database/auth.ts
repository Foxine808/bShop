import type { Token } from "surrealdb";
import { database_connection_environment, type Email, type Gender, type Password } from ".";

export type LoginCredentials = {
  email: Email,
  password: Password
}

export type RegistrationCredentials = LoginCredentials & {
	gender: Gender,
	name: string,
	patronimyc: string | undefined,
	surname: string
}

export async function register_user(credentials: RegistrationCredentials): Promise<Token> {
  return await database_connection_environment( async (data) => {
    const {db} = data;

    return await db.signup({
      namespace: data.namespace,
      database: data.database,

      access: 'user',

      variables: credentials
    })
  });
}

export async function login_user(credentials: LoginCredentials): Promise<Token> {
  return await database_connection_environment( async (data) => {
    const {db} = data;

    return await db.signin({
      namespace: data.namespace,
      database: data.database,

      access: 'user',

      variables: credentials
    })
  });
}
