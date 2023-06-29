import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ListRoute.scss";

export default function ListRoute() {
  return (
    <main className="ListRoute">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button title="Rafraîchir">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="./add" className="button" title="Ajouter">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          <button title="Supprimer">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">2.99 €</td>
              <td className="qty">152</td>
            </tr>
            <tr className="selected">
              <td className="name">Pelle</td>
              <td className="price">5.50 €</td>
              <td className="qty">10</td>
            </tr>
            <tr>
              <td className="name">Marteau</td>
              <td className="price">1.20 €</td>
              <td className="qty">15</td>
            </tr>
            <tr>
              <td className="name">Pioche</td>
              <td className="price">2.33 €</td>
              <td className="qty">122</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
