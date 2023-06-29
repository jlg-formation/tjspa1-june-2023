import logo from "/logo.svg";
import "./HeaderLayout.scss";
import { Link } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  );
}
