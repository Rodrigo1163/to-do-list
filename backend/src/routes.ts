import { Router } from "express";
import CreateTasksControllers from "./controllers/CreateTasksControllers";
import { ListTasksControllers } from "./controllers/ListTasksControllers";
import { CompleteTasksControllers } from "./controllers/CompleteTasksControllers";

const router = Router();

router.post("/task", new CreateTasksControllers().handle);
router.get("/task", new ListTasksControllers().handle);
router.put("/task/:id", new CompleteTasksControllers().handle);

export { router };
