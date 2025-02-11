import { Router } from "express";
import CreateTasksControllers from "./controllers/CreateTasksControllers";

const router = Router();

router.post("/task", new CreateTasksControllers().handle);

export { router };
