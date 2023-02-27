import Loading from "../Shared/Loading";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import OtherPageLayout from "../Layout/OtherPageLayout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/detail",
    element: <OtherPageLayout />,
    children: [
      {
        path: "/detail/product/details/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
