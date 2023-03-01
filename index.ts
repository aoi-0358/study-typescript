import { Key } from "react";

export const obj = {
  foo: "foo",
  bar: "bar",
};

type obj = typeof obj;
type key = keyof obj;

// type key = keyof typeof obj;

// const key: key = "bar";
