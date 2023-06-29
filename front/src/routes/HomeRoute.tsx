import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./HomeRoute.scss";

export default function HomeRoute() {
  return (
    <main className="HomeRoute">
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="button primary">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </main>
  );
}
