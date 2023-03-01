export type User = {
  name: string;
} & PersonalData;
// インターセクションタイプでPersonalDataをくっつけている

type Foo = "height" | "weigth";

type PersonalData = {
  // heigtht: number;
  // weight: number;
  [k in "height" | "weight"]: number;
  // kはなんでもいいが慣例的にkeyのk、propertiesnのpが多い
  //　[k in "height" | "weight"]: number;でオブジェクトのプロパティ名をマッピング（配置）
  //　↑MappedTypesのメリット
  //  1."height" | "weight"と書かなくても上で定義してるFooを代入しても同じ意味
  //  2.個人的にはリファクタリングに便利かも🤔
};

const user: User = {
  name: "iii",
  height: 165,
  weight: 56,
};
