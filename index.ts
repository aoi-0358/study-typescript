export type Foo<T> = {
  value: T;
};
const foo: Foo<string> = {
  value: "aaa",
};
// 外部パッケージの型定義がGenericsが使われているので理解してないとtypescript開発は厳しい
// Genericsは型の定義を遅延できるもの
// 後で型を決定できることで色々なケースに対応できる
// １〜２ Foo<T>とvalue: T;と記述して
// ４のFoo<>に後で決定したい型を入れる、５を文字列以外にするとエラー

// ４〜５別の例
//  const foo: Foo<number> = {
//   value: 0,
// };　これでもOK
