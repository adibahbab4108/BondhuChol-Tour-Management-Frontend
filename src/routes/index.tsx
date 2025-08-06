import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    // element:<App/>
    Component: App,
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    path: "admin",
    Component: AdminLayout,
    children: [
      {
        path: "analytics",
        Component: Analytics
      },
    ],
  },
]);
