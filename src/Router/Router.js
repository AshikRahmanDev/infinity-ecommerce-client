import Loading from "../Shared/Loading";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Main from "../Layout/Main";
import Register from "../Pages/Account/Register";
import Login from "../Pages/Account/Login";
import ShoppingCart from "../Pages/Shopping Cart/ShoppingCart";

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
      { path: "/main/shoppingCart", element: <ShoppingCart /> },
    ],
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
