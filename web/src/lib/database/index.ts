import Surreal from "surrealdb";

export type Email = string;
export type Password = string;
export type Gender = 'male' | 'female';

type DCEData = {
  db: Surreal,
  namespace: string,
  database: string,
};
export async function database_connection_environment<T>
(
  fn: (data: DCEData) => T
): Promise<Awaited<T>>
{
  const db = new Surreal();

  const namespace = 'bshop';
  const database = 'bshop';

  await db.connect('ws://database:8000/rpc', {
    namespace: 'bshop',
    database: 'bshop',
  });

  const result = await fn({
    db: db,
    namespace: namespace,
    database: database
  });

  db.close();

  return result;
}
