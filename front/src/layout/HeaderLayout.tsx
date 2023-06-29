import logo from "/logo.svg";
import "./HeaderLayout.scss";

export default function HeaderLayout() {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Logo" />
        <span>Gestion Stock</span>
      </a>
    </header>
  );
}
