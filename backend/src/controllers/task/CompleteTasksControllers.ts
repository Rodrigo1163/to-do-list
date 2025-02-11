import { Request, Response } from "express";
import { CompleteTasksServices } from "../../services/task/CompleteTasksServices";

class CompleteTasksControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const completeTasksServices = new CompleteTasksServices();
    const tasks = await completeTasksServices.execute({ id });

    return res.json(tasks);
  }
}

export { CompleteTasksControllers };
