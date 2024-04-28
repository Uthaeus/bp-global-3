import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import Error from "./components/error/error";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

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
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
