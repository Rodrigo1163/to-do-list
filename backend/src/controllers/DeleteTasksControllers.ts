import { Request, Response } from "express";
import { DeleteTasksServices } from "../services/task/DeleteTasksServices";

class DeleteTasksControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteTasksServices = new DeleteTasksServices();
    const task = await deleteTasksServices.execute({ id });

    return res.json(task);
  }
}
export { DeleteTasksControllers };
