import { RouteObject } from "react-router-dom";
import ListRoute from "./ListRoute";
import AddRoute from "./AddRoute";

export const stockConfig: RouteObject[] = [
  {
    path: "",
    element: <ListRoute />,
  },
  {
    path: "add",
    element: <AddRoute />,
  },
];
