import type { RecordId } from "surrealdb";

export type Timestamps = {
  created_at: Date;
  updated_at: Date;
}

export type Id = RecordId<string>;

export type RecordResponce<T> = T & { timestamps: Timestamps } & {id: Id};
