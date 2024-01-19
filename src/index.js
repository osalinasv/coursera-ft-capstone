import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./normalize.css";

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Order = React.lazy(() => import("./pages/Order"));
const Reserve = React.lazy(() => import("./pages/Reserve"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  </React.StrictMode>,
);
