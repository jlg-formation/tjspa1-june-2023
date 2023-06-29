import "./AddRoute.scss";

export default function AddRoute() {
  return (
    <main className="AddRoute">
      <h1>Ajout d'un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" />
        </label>
        <label>
          <span>Prix</span>
          <input type="text" />
        </label>
        <label>
          <span>Quantité</span>
          <input type="text" />
        </label>

        <button className="primary">Ajouter</button>
      </form>
    </main>
  );
}
