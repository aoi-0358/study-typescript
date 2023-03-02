export const foo = (value?: string) => {
  if (!value) {
    return value;
  }

  return value;
};

//(!value)は論理否定演算子で頻出する
//(!value)がファルシイな値だった場合に逆のtreuになってif文が実行される
//こうすることで下のreturn value;でvalue: stringになってunduifindの可能性を消せる
//reactで上でpropsが渡ってきた時にそのpropsの値がオプショナルだった場合にこれを使ってunduifindの可能性を消して、下のreturnでコンポネートを書く
//
//

