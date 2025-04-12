import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Applayout from "../layouts/Applayout";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Applayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default routes;
