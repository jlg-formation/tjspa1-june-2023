import { Article, NewArticle } from "../stock/interfaces/Article";

const url = "http://localhost:3000/api/articles";

class API {
  async add(newArticle: NewArticle): Promise<void> {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(newArticle),
      headers: { "Content-Type": "application/json" },
    });
  }

  async getArticles(): Promise<Article[]> {
    const response = await fetch(url);
    const articles: Article[] = await response.json();
    return articles;
  }
}

export const api = new API();
