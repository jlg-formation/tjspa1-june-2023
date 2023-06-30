import express from "express";

const app = express.Router();

const articles = [
  { id: "a1", name: "Pioche", price: 2.99, qty: 450 },
  { id: "a2", name: "Pelle", price: 5.5, qty: 52 },
];

app.use((req, res, next) => {
  setTimeout(next, 2000);
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
