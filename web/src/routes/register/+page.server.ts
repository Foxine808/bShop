import type { Gender } from "$lib/database";
import { register_user } from "$lib/database/auth";
import { redirect, type Cookies } from "@sveltejs/kit";

export function load() {}

export const actions = {
  // deno-lint-ignore require-await
  default: async ({ cookies, request }: { cookies: Cookies, request: Request}) => {
    const formData = await request.formData();

    const email = formData.get("email")!.toString();
    const name = formData.get("name")!.toString();
    const gender = formData.get("gender")!.toString() as Gender; 
    const password = formData.get("password")!.toString(); 
    const patronymic = formData.get("patronymic")?.toString(); 
    const surname = formData.get("surname")!.toString();

    const token = await register_user({
      email: email,
      name: name,
      gender: gender,
      password: password ?? '',
      patronimyc: patronymic,
      surname: surname
    });

    cookies.set('token',token,{path: '/'});

    throw redirect(301, '/profile')
  }
}
