import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //Se for uma instância do tipo error
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "Error",
    message: "Internal server error.",
  });
});

app.listen(3333, () => console.log("Server started on port 3333"));
