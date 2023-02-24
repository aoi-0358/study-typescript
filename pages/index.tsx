import type { NextPage } from "next";

let obj3: Record<string, unknown> = {
  a: 1,
  b: "foo",
};
let obj4: { [key: string]: { foo: unknown } } = {
  a: {
    foo: 1,
  },
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
