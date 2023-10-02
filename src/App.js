import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/layout.js";
import Corousel from "./HomePage.js";
import Product from "./Products.js";
import Selected from "./SelectedProduct.js";
import AmazonCart from "./AmazonCart.js";
const router = createBrowserRouter([{
  path: "/", element: <Layout />, children: [{
    path: "", element: <Corousel />
  },
  {
    path: ":id", children: [{
      index: true, element: <Product />
    },
    {
      path: "products/:productId", element: <Selected />
    }],
  }, { path: "cart", element: <AmazonCart /> }
  ]
}])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
