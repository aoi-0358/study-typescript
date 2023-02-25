import type { NextPage } from "next";

type Foo = {
  a: number;
  b: string;
};

type Bar = {
  a: string;
  c: boolean;
};
//Union Typesは｜でがっちゃんこしてFooBarに入れてる
type FooBar = Foo | Bar;

const test: FooBar = {
  a: 1,
  b: "",
  c: true,
};

// if文で型を絞り込んでいる
if("b" in test) {
  test.a.toFixed
} else {
  test.a
}




const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
