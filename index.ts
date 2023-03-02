export const foo = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    return { value: arg.toUpperCase() };
  }
  return { value: arg.toFixed };
};

//　関数のGenerics　extendsによる型制約　超重要！！！

// export const foo = <T>(arg: T) => {
// return { value: arg };
// };
// このコードだとargが中でどんな型になってるのかかわからない
// T自体がなに分からない、argは型制約がないとunknownになる
// unknownになると中で何かしらのメゾットが呼び出せない問題がある
// もし、(arg: T)にstringがくるとわかっていたらstringのメゾットが使える

// どうやってstringを定義するのか？
// export const foo = <T extends string>(arg: T) => {
//   arg.toUpperCase
//   return { value: arg };
// };
// <T extends string>と書けば(arg: T)はstringを満たすと証明できstringがもつメゾットにアクセスできる
// 実際の開発ではarg.toUpperCaseにargを使っていろんな記述をかくことになる
// なのでargがunknownの状態だったら不都合が生じるのでextendsによる型制約は必須

// UnionTypesで型を定義した場合
// export const foo = <T extends string | number>(arg: T) => {
//   arg.toUpperCase
//   return { value: arg };
// };
//　↑はtoUpperCaseで（プロパティ 'toUpperCase' は型 'number' に存在しません）のエラーになる
// なぜか？
// (arg: T)とゆうのはnumberかstring両方の可能性かあることになる
// なのでnumberだった場合toUpperCaseは存在しないからアクセスできなくてエラー

// なのでif文を使って型を絞り込んで解決
// if (typeof arg === "string") {
//   arg.toUpperCase;
// }
// return { value: arg };
// };
// (typeof arg === "string")でargがstringの場合は
// arg.toUpperCase;が使える

// 以下のように記述すると５０でreturnしているのでstringのメゾットが使える
// ５２はif文の後でnumberの制約を満たす型になるので、numberのメゾットtoFixedが使える
// export const foo = <T extends string | number>(arg: T) => {
//   if (typeof arg === "string") {
//     return { value: arg.toUpperCase() };
//   }
//   return { value: arg.toFixed };
// };


