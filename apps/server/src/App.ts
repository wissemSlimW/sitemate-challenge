import express, { Express, Request, Response } from "express";
import { routes } from "./routes";
import cors from "cors";

export const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ message: `Route '${req.baseUrl}' not founded.` });
});