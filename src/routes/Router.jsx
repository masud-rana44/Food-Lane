import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import Foods from "../pages/Foods/Foods";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import Order from "../pages/order/Order";
import Orders from "../pages/orders/Orders";
import { PrivateRoute } from "../components/PrivateRoute";
import NewFood from "../pages/newFood/NewFood";
import MyAddedFood from "../pages/myAddedFood/MyAddedFood";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/foods/user/new",
        element: <NewFood />,
      },
      {
        path: "/foods/users/:email",
        element: <MyAddedFood />,
      },
      {
        path: "/foods/:id",
        element: <FoodDetails />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders/new",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
