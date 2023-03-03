export const foo = (id: string, age: number) => {
  return 0;
};

type Foo = ReturnType<typeof foo>;

// Utility Types
// 上のコード５ではReturnTypeと記述することで公式が、標準で型を準備してくれてるようになる
// Fooをホバーすると　type Foo = number　になっている
// ２をreturn "aaa";の文字列に変えると
// Fooはstringになる

// 個人的には初学者である自分が下手に型アノテーションで定義するより
// Utility Typesに頼ったほうが変な混乱を生まないのかなと思うからありがたい