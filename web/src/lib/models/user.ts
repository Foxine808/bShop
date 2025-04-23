import type { Id } from "."

export type User = {
  name: string,
  surname: string,
  partonymic: string | undefined,
  email: string,
  role: Id
}
