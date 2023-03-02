type UserA = { name: string };
type UserB = { name: string; nickName: string };

export const foo = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value;
  }

  return value;
};

// in演算子をつかったType Guard
// ("nickName" in value) でvalueの中に"nickName"があるかを検査している
// 一個のreturn value;でUserBが絞り込まれていて以後はUserBの可能性はないので、下の return value;ではUserA
// 

