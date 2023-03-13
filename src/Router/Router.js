import Loading from "../Shared/Loading";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Main from "../Layout/Main";
import Register from "../Pages/Account/Register";
import Login from "../Pages/Account/Login";
import ShoppingCart from "../Pages/Shopping Cart/ShoppingCart";
import PrivetRoute from "./PrivetRoute";
import AllProducts from "../Pages/AllProducts/AllProducts";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "/main/product/details/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <ProductDetails />,
      },
      { path: "/main/register", element: <Register /> },
      { path: "/main/login", element: <Login /> },
      { path: "/main/products", element: <AllProducts /> },
      {
        path: "/main/checkout/:id",
        loader: ({ params }) => {
          const itemKey = params.id.split(" ");
          const id = itemKey[0];
          const email = itemKey[1];

          return fetch(
            `http://localhost:5000/cart/product/${id}?email=${email}`
          );
        },
        element: <CheckOut />,
      },
      {
        path: "/main/shoppingCart",
        element: (
          <PrivetRoute>
            <ShoppingCart />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
