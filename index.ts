export type Foo<T extends string | number> = {
  value: T;
};

const foo1: Foo<string> = {
  value: "",
};

const foo2: Foo<number> = {
  value: 9,
};

// extendsによる型制約　頻出
// １の　<extends 型>　で初期値を設定して後から別の型を入れられないようにする


// エラー例　
// const foo2: Foo<boolean> = {
//   value: 9,
// };
// １の<T extends string | number>で初期値を設定してないのでエラー

