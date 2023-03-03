export type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

type PickUser = Pick<User, "name" | "country">;

const user: PickUser = {
  name: "iii",
  country: "UK",
};

// UtilityTypes Pickについて　頻出
// 特定のプロパティを隠してそれ以外のプロパティを取得する方法
// 今回の場合消したい１１のageがエラーになっている
// ７の　type PickUser = Pick<User, "name" | "country">;　と記述

// ９の　PickUserをホバーすると
// type PickUser = {
//   name: string;
//   country?: "US" | "UK" | "JP" | undefined;
// ageが取得できてないのがわかる
