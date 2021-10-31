import Link from "next/link";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const hadelclick = () => {
    router.replace("/product");
  };
  return (
    <div>
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
    </div>
  );
};

export default index;
