import { createBrowserRouter } from "react-router-dom";
import VerticalLayout from "../layout/VerticalLayout";
import HomeRoute from "./HomeRoute";
import LegalRoute from "./LegalRoute";

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
    ],
  },
]);
