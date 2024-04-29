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
import NewOrder from "./components/orders/new-order";

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
        path: "/admin/new-user",
        element: <NewUser />,
      },
      {
        path: "/admin/new-order",
        element: <NewOrder />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
