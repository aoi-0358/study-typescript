export type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

type OmitUser = Omit<User, "age">;

const user: OmitUser = {
  name: "iii",
  country: "UK",
};

// UtilityTypes Omit 頻出
// Pickの逆でいらないプロパティを指定する
// OmitUserをホバーすると
// type OmitUser = {
//   name: string;
//   country?: "US" | "UK" | "JP" | undefined;
// }
// ageが取得できてないのがわかる