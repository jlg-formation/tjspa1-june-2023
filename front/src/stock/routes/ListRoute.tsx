import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useArticleStore } from "../../store/article.store";
import "./ListRoute.scss";
import { useState } from "react";

export default function ListRoute() {
  const [errorMsg, setErrorMsg] = useState("");
  const articleStore = useArticleStore();

  const handleRefresh = async () => {
    try {
      console.log("refresh");
      await articleStore.refresh();
      console.log("refresh done");
    } catch (err) {
      console.log("err: ", err);
      setErrorMsg("Erreur Technique");
    }
  };

  return (
    <main className="ListRoute">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button title="Rafraîchir" onClick={handleRefresh}>
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="./add" className="button" title="Ajouter">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          <button title="Supprimer">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </nav>
        <div className="error">{errorMsg}</div>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articleStore.articles.map((a) => (
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
