import { Link } from "react-router-dom";

export default function Product() {
  const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/products/${product.id}`}>{product.title}</Link>  Absolute Path */}
            <Link to={product.id}>{product.title}</Link> {/* Relative Path */}
          </li>
        ))}
      </ul>
    </>
  );
}
