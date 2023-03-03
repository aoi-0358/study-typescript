export type Foo = NonNullable<string | null | undefined>;

// UtilityTypes NonNullable　頻出
// nullとundefinedを除いたもの
// Fooをホバーするとstringになる






























// export type User = {
//   name: string;
//   age: number | null;
//   country?: "US" | "UK" | "JP";
// };

// type OmitUser = Omit<User, "age">;

// const user: OmitUser = {
//   name: "iii",
//   country: "UK",
// };
