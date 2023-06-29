import { Link } from "react-router-dom";
import "./HomeRoute.scss";

export default function HomeRoute() {
  return (
    <main className="HomeRoute">
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="button primary">
        Voir le stock
      </Link>
    </main>
  );
}
