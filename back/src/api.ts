import express from "express";

const app = express.Router();

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 450 },
  { id: "a2", name: "Pelle", price: 5.5, qty: 52 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
