type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "en";
};

export const foo = async () => {
  const res = await fetch("");
  const json = await res.json();
  if (isUserA(json)) {
    return json.lang;
  }
};

// ユーザー定義の型ガード　頻出
// １５で取得した外部のAPIに１６で型をつけたいがjsonをホバーするとanyで扱いづらい
// なので６〜８の関数user is UserAで型を絞り込んで１７のif文でjsonをホバーするとUserAの型が取得できてる
//外部のAPIを叩いた時のレスポンスに型をつけたい時に良い
