import { Outlet } from "react-router-dom";
import "./BodyLayout.scss";

export default function BodyLayout() {
  return (
    <div className="BodyLayout">
      <Outlet />
    </div>
  );
}
