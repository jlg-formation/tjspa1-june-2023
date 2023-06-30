import { faCircleNotch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRoute.scss";
import { useArticleStore } from "../../store/article.store";
import { NewArticle } from "../interfaces/Article";

export default function AddRoute() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const [errorMsg, setErrorMsg] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const navigate = useNavigate();
  const articleStore = useArticleStore();

  const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };
  const handlePrice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrice(+event.target.value);
  };
  const handleQty: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQty(+event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setErrorMsg("");
      setIsAdding(true);
      console.log("event: ", event);
      const newArticle: NewArticle = { name, price, qty };
      await articleStore.add(newArticle);
      await articleStore.refresh();
      navigate("..");
    } catch (err) {
      console.log("err: ", err);
      setErrorMsg("Erreur Technique");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <main className="AddRoute">
      <h1>Ajout d'un article</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nom</span>
          <input type="text" defaultValue={name} onChange={handleName} />
        </label>
        <label>
          <span>Prix</span>
          <input
            type="number"
            step={0.01}
            defaultValue={price}
            onChange={handlePrice}
          />
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            step={1}
            defaultValue={qty}
            onChange={handleQty}
          />
        </label>
        <div className="error">{errorMsg}</div>
        <button className="primary" disabled={isAdding}>
          <FontAwesomeIcon
            icon={isAdding ? faCircleNotch : faPlus}
            spin={isAdding}
          />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  );
}
