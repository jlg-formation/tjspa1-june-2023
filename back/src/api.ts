import express, { json } from "express";
import { randomUUID } from "node:crypto";

const app = express.Router();

let articles = [
  { id: "a1", name: "Pioche", price: 2.99, qty: 450 },
  { id: "a2", name: "Pelle", price: 5.5, qty: 52 },
];

app.use((req, res, next) => {
  setTimeout(next, 300);
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle = req.body;
  const article = { ...newArticle, id: randomUUID() };
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
