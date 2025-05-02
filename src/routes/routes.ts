import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Applayout from "../layouts/Applayout";
import AuthCallback from "../pages/AuthCallback";
import Analysis from "../pages/Analysis";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Applayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/analyse",
        Component: Analysis
      }
    ],
  },
  {
    path: "/auth/callback",
    Component: AuthCallback,
  },
]);

export default routes;
