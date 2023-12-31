import { create } from "zustand";
import { Article, NewArticle } from "../stock/interfaces/Article";
import { api } from "../api/api";

export interface ArticleStore {
  remove(ids: string[]): Promise<void>;
  articles: Article[] | undefined;
  add(newArticle: NewArticle): Promise<void>;
  refresh(): Promise<void>;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: undefined,

  async refresh() {
    const articles = await api.getArticles();
    set(() => ({ articles }));
  },

  async add(newArticle: NewArticle) {
    await api.add(newArticle);
  },

  async remove(ids: string[]) {
    await api.remove(ids);
  },
}));
