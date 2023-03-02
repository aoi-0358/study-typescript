export function foo<T>(arg: T) {
  return { value: arg };
}
const foo1 = foo<number[]>([1, 4]);

// 関数のGenerics頻出
// １の<T>が(arg: T)の型として使われているので
// ４でfoo<number[]>の配列と打ったらnumberの配列自体が(arg: T)として設定されるから
// ４の([1, 4]);で引数として配列を指定しなければいけない