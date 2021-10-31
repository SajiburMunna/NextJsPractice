import Link from "next/link";
const index = ({ productId = 100 }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <h1>Home</h1>
        </a>
      </Link>

      <h1>
        <Link href="/product/1">
          <a>product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <a>product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <a>product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>product {productId}</a>
        </Link>
      </h1>
    </div>
  );
};

export default index;
