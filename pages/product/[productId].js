import { useRouter } from "next/router";
const Productdetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product details {productId}</h1>
    </div>
  );
};

export default Productdetails;
