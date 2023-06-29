import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

import "./VerticalLayout.scss";

export default function VerticalLayout() {
  return (
    <div className="VerticalLayout">
      <HeaderLayout />
      <BodyLayout />
      <FooterLayout />
    </div>
  );
}
