import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import AdminLayout from "./components/layouts/admin-layout";
import Error from "./components/error/error";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./components/admin/admin";
import AdminUsers from "./components/admin/users/admin-users";
import NewUser from "./components/admin/users/new-user";
import EditUser from "./components/admin/users/edit-user";
import NewOrder from "./components/orders/new-order";
import EditOrder from "./components/orders/edit-order";
import UserDetail from "./components/admin/users/user-detail";
import OrderDetail from "./components/orders/order-detail";
import EditAccount from "./components/account/edit-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/orders/:id",
        element: <OrderDetail />,
      },
      {
        path: "/account/edit",
        element: <EditAccount />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/users/new",
        element: <NewUser />,
      },
      {
        path: "/admin/users/:id",
        element: <UserDetail />,
      },
      {
        path: "/admin/users/:id/edit",
        element: <EditUser />,
      },
      {
        path: "/admin/orders/new",
        element: <NewOrder />,
      },
      {
        path: "/admin/orders/:id/edit",
        element: <EditOrder />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
