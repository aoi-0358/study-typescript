type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };


export const foo = (value: UserA | UserB) => {
  if (value.lang === "ja") {
    return value;
  }

  return value;
};

// タグ付きUnion Types頻出する
// (value.lang === "ja")が"ja"であれば１個目のreturn value;がUserAで早期returnしてるから下のreturn value;でUserB
// 

