import "#index.css";
import "#normalize.css";
import Root from "#pages/Root";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = React.lazy(() => import("#pages/Home"));
const Menu = React.lazy(() => import("#pages/Menu"));
const Order = React.lazy(() => import("#pages/Order"));
const Reserve = React.lazy(() => import("#pages/Reserve"));
const ReserveForm = React.lazy(() => import("#pages/Reserve/Form"));
const ReserveSuccess = React.lazy(() => import("#pages/Reserve/Success"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order/:slug?",
        element: <Order />,
      },
      {
        path: "/reserve",
        element: <Reserve />,
        children: [
          {
            path: "",
            element: <ReserveForm />,
          },
          {
            path: "success",
            element: <ReserveSuccess />,
          },
        ],
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
