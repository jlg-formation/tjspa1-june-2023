import { create } from "zustand";
import { Article } from "../stock/interfaces/Article";
import { api } from "../api/api";

export interface ArticleStore {
  articles: Article[] | undefined;
  refresh(): Promise<void>;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: undefined,

  async refresh() {
    const articles = await api.getArticles();
    set(() => ({ articles }));
  },
}));
