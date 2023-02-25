import type { NextPage } from "next";

type Animals = "dog" | "cat";

type Foo = {
  [key in Animals]: string;
};

const foo: Foo = {
  dog: "t",
  cat: "f",
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
