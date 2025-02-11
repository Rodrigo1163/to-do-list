import { Request, Response } from "express";
import { ListTasksServices } from "../services/task/ListTasksServices";

class ListTasksControllers {
  async handle(req: Request, res: Response) {
    const listTasksServices = new ListTasksServices();
    const list = await listTasksServices.execute();

    return res.json(list);
  }
}

export { ListTasksControllers };
