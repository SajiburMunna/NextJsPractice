import { useRouter } from "next/router";

const reviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        ProudctId{productId} Product Reviewid:{reviewId}
      </h1>
    </div>
  );
};

export default reviewId;
