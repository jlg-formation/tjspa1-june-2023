import express, { Request } from "express";
import serveIndex from "serve-index";
import { api } from "./api";
import { Response } from "express";
import { NextFunction } from "express";

const app = express();

const publicDir = "../front/dist";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("req: ", req.url, req.method);
  next();
};

app.use(logger);

// app.use("/api", (req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   next();
// });

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.get("/**", (req, res) => {
  res.sendFile("index.html", { root: publicDir });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
