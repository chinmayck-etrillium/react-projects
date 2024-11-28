import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

//  Absolute path
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/products", element: <Product /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//     ],
//   },
// ]);

//Relative Path
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <Product /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
