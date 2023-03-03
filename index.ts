import { PartialDeep } from "type-fest";


export type User = {
  name: string;
  age: number | null;
  address: {
    country: "US" | "UK" | "JP";
  }
};

type PartialUser = PartialDeep<User>;

const user: PartialUser = {
  name: "iii",
  address: {},
};




// type-fest」の挙動について

// export type User = {
//   name: string;
//   age: number | null;
//   country?: "US" | "UK" | "JP";
// };

// type PartialUser = Partial<User>;

// const user: PartialUser = {
//   name: "iii",
//   country: "UK",
// };

// 上のコード１９〜２１のプロパティをオプショナル（？）にしたいとき
// PartialUserをホバーすると
// type PartialUser = {
//   name?: string | undefined;
//   age?: number | null | undefined;
//   country?: "US" | "UK" | "JP" | undefined;
// }
// name?とage?になっていてOKだけど


// typescript標準のPartialだとネストしたオブジェクトに対してはPatialが有効にならない
// export type User = {
//   name: string;
//   age: number | null;
//   address: {
//     country: "US" | "UK" | "JP";
//   }
// };

// type PartialUser = Partial<User>;

// const user: PartialUser = {
//   name: "iii",
//   address: {},
// };
// address: {},がエラーになりPartialUserをホバーすると
// type PartialUser = {
//   name?: string | undefined;
//   age?: number | null | undefined;
//   address?: {
//       country: "US" | "UK" | "JP";
//   } | undefined;
// }
// countryに？がついてないのがわかる

// なので８１でPartialDeepをインポートして
// export type User = {
//   name: string;
//   age: number | null;
//   address: {
//     country: "US" | "UK" | "JP";
//   }
// };
// type PartialUser = PartialDeep<User>;
// const user: PartialUser = {
//   name: "iii",
//   address: {},
// };

// PartialUserをホバーすると
// type PartialUser = {
//   name?: string | undefined;
//   age?: number | null | undefined;
//   address?: PartialObjectDeep<{
//       country: "US" | "UK" | "JP";
//   }, {}> | undefined;
// }
// ９０のPartialObjectDeepとゆう型が付いててこれがオプショナルにしてくれてる

