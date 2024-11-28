import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        {/* Go to our <Link to="/products">product page</Link>   Absolute Path*/}
        Go to our <Link to="products">product page</Link> {/* Relative Path*/}
      </p>
    </>
  );
}
