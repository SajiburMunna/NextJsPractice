import Link from "next/link";
import { useRouter } from "next/router";
import Home from "../components/Home";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const hadelclick = () => {
    router.replace("/product");
  };
  return (
    <div>
      <Head>
        <title>Hi</title>
      </Head>
      <h1>Hello world</h1>
      <Link href="/blog">
        <a>
          <h1>blog</h1>
        </a>
      </Link>

      <Link href="/product">
        <a>
          <h1>product</h1>
        </a>
      </Link>
      <button onClick={hadelclick}>Go TO Product</button>
      <Home></Home>
    </div>
  );
};

export default index;
