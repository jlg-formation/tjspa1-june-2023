import { createBrowserRouter } from "react-router-dom";
import VerticalLayout from "../layout/VerticalLayout";
import HomeRoute from "./HomeRoute";
import LegalRoute from "./LegalRoute";
import { stockConfig } from "../stock/routes/config";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <VerticalLayout />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
      },
      {
        path: "legal",
        element: <LegalRoute />,
      },
      {
        path: "stock",
        children: stockConfig,
      },
    ],
  },
]);
