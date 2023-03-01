export type User = {
  name: string;
  [key: string]: string;
  //[]で囲われてるとこがindex Signature
};

const user: User = {
  name: "iii",
  account: "shiam.it",
};
