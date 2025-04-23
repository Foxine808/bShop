import { login_user } from "$lib/database/auth";
import { error, redirect, type Cookies } from "@sveltejs/kit";
import { Surreal } from 'surrealdb';

export const actions = {
  default: async ({ cookies, request }: { cookies: Cookies, request: Request }) => {
    const data = await request.formData();

    const email = data.get("email")!;
    const password = data.get("password")!;

    const token = await login_user({
      email: email.toString(),
      password: password.toString()
    });

    cookies.set('token', token, { path: '/' });

    throw redirect(301, '/profile')
  }
}
