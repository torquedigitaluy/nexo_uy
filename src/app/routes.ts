import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/servicio/:id",
    Component: ServiceDetail,
  },
]);
