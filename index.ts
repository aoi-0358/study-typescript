export const foo = <T>(arg: T) => {
  return { value: arg };
};
const foo1 = foo("");
const foo2 = foo(0);
const foo3 = foo([false]);

// Generics 暗黙的な型解決について　頻出
// ４〜６のfooの後の引数(""); (0); (false);の型を自動で推論してくれる
// foo1をホバーするとvalue: stringになって進めてくれる
// foo3ならvalue: boolean[]の配列になって推論が効いているのがわかる
// この推論のおかげで使う側か毎回、型を指定しなくても良くなって便利

// どんな時に使うのか？
// Nullableかもしれない場合（nullになりうる値のこと）
// １のconst foo1 = foo("");でカラ文字を指定してるが、変数とかが入ってくるかもしれないと仮定それがNullableの場合とも仮定
// 例
//　1をconst foo1 = foo<string | null>("");
// 引数に何が入るかわからない
