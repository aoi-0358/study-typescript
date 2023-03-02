import { type } from "os";

export type User<T> = {
  name: string;
  state: T;
};

type Japanese = User<"北海道" | "長野">;
type American = User<"CA" | "NY">;
// ここで初めて型が決定する

const user1: Japanese = {
  name: "田村",
  state: "北海道",
};

const user2: American = {
  name: "james",
  state: "CA",
};
