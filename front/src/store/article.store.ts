import { create } from "zustand";
import { Article } from "../stock/interfaces/Article";

export interface ArticleStore {
  articles: Article[];
}

export const useArticleStore = create<ArticleStore>(() => ({
  articles: [
    { id: "a1", name: "Tournevis", price: 2.99, qty: 450 },
    { id: "a2", name: "Pelle", price: 5.5, qty: 52 },
  ],
}));
