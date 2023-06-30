import { create } from "zustand";
import { Article } from "../stock/interfaces/Article";
import { api } from "../api/api";

export interface ArticleStore {
  articles: Article[];
  refresh(): Promise<void>;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [
    { id: "a1", name: "Tournevis", price: 2.99, qty: 450 },
    { id: "a2", name: "Pellexxxxxx", price: 5.5, qty: 52 },
  ],

  async refresh() {
    const articles = await api.getArticles();
    set(() => ({ articles }));
  },
}));
