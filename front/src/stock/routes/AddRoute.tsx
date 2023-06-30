import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddRoute.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler, useState } from "react";

export default function AddRoute() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };
  const handlePrice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrice(+event.target.value);
  };
  const handleQty: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQty(+event.target.value);
  };
  return (
    <main className="AddRoute">
      <h1>Ajout d'un article</h1>
      <form>
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

        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
      {name} {price} {qty}
    </main>
  );
}
