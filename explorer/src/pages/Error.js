import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <main>
        <h2>Could not find the page.</h2>
        <h3>
          Please navigate back to <Link to="/">Home</Link>
        </h3>
      </main>
    </>
  );
}
