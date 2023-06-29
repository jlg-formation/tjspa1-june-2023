import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ListRoute.scss";
import { Article } from "../interfaces/Article";
import { useEffect, useState } from "react";

export default function ListRoute() {
  const ARTICLES: Article[] = [
    { id: "a1", name: "Tournevis", price: 2.99, qty: 450 },
    { id: "a2", name: "Pelle", price: 5.5, qty: 52 },
  ];
  const [articles, setArticles] = useState(ARTICLES);

  useEffect(() => {
    setTimeout(() => {
      console.log("add 3eme art");
      ARTICLES.push({ id: "a3", name: "Rateau", price: 2.99, qty: 450 });
      setArticles([...ARTICLES]);
    }, 2000);
  }, []);

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
            {articles.map((a) => (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
