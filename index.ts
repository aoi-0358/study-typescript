export type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "iii",
  age: 2,
};

user.age = 30;

// Utility Typesの Readonly
// １０と１１のプロパティの値を１４で変更されたくないとき（Utility Types）にしたい時に使う
// なので１４のageはエラー