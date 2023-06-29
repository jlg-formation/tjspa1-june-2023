import { Link } from "react-router-dom";
import "./FooterLayout.scss";

export default function FooterLayout() {
  return (
    <footer>
      <Link to="/legal">Mentions Légales</Link>
    </footer>
  );
}
