import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useArticleStore } from "../../store/article.store";
import "./ListRoute.scss";
import { useCallback, useEffect, useState } from "react";

export default function ListRoute() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const articleStore = useArticleStore();

  const handleRefresh = useCallback(async () => {
    try {
      console.log("refresh");
      setErrorMsg("");
      setIsRefreshing(true);
      await articleStore.refresh();
      console.log("refresh done");
    } catch (err) {
      console.log("err: ", err);
      setErrorMsg("Erreur Technique");
    } finally {
      setIsRefreshing(false);
    }
  }, [articleStore]);

  useEffect(() => {
    if (articleStore.articles === undefined) {
      handleRefresh();
    }
  }, [articleStore.articles, handleRefresh]);

  return (
    <main className="ListRoute">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button
            title="Rafraîchir"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <FontAwesomeIcon
              icon={isRefreshing ? faCircleNotch : faRotateRight}
              spin={isRefreshing}
            />
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
            {articleStore.articles === undefined ? (
              <tr>
                <td colSpan={3}>
                  <div className="loading">
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                    <span>Chargement...</span>
                  </div>
                </td>
              </tr>
            ) : (
              articleStore.articles.map((a) => (
                <tr key={a.id}>
                  <td className="name">{a.name}</td>
                  <td className="price">{a.price} €</td>
                  <td className="qty">{a.qty}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
