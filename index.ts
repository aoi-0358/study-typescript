export const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};
// export const getProperty = <T, K>(obj: T, key: K) => {
//   return obj[key];
// };
// オブジェクトを第１引数にわたして、そのオブジェクトのkeyを第二引数にわたしてそのvalueを返すコード
// obj[key]でエラー（型 'K' はインデックスの種類 'T' に使用できません。）
// 型があってないっと仮定

// Lookup Typesで解決
// export const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
//   return obj[key];
// };
// 第１引数に何かしらのオブジェクトを入れることになるが、keyofでTと一緒にしてる
// K extendには必ずオブジェクトのkeyが入るようになってLookup Typesがはたらく