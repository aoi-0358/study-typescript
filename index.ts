export type User = {
  name: string;
  age: number;
  [key: string]: string | number | undefined;
  // [key: string]: string;
  // []で囲われてるとこがindex Signatureで動的にプロパティを入れたい時に使う、UnionTypesで定義してない型を下のUserに入れるとエラーになるのが欠点
  // 型がもろくなりがちなので、型がわかるのであれば素直に（上　name: string;　下  name: "iii",と書いたほうがいいのでindex Signatureは多様すべきではない
};

const user: User = {
  name: "iii",
  age: 20,
  account: "shiam.it",
  time: "seven_oclock",
};

user.account;
