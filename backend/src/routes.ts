import { Router, Request, Response } from "express";
import connection from "./connection/connection";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({ message: "hello world!" });
});

export { router };
