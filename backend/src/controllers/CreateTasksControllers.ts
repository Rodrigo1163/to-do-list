import { Request, Response } from "express";
import { CreateTasksServices } from "../services/task/CreateTasksServices";

class CreateTasksControllers {
  async handle(req: Request, res: Response) {
    const { title } = req.body;
    const createTasksServices = new CreateTasksServices();
    const response = await createTasksServices.execute({
      title,
    });
    return res.json(response);
  }
}

export default CreateTasksControllers;
