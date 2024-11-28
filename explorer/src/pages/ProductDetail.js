import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h1>This is the product detail page for {params.productId}</h1>

      <Link to=".." relative="path">Back</Link>
    </>
  );
}
