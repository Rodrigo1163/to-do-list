import { Router } from "express";
import CreateTasksControllers from "./controllers/task/CreateTasksControllers";
import { ListTasksControllers } from "./controllers/task/ListTasksControllers";
import { CompleteTasksControllers } from "./controllers/task/CompleteTasksControllers";
import { DeleteTasksControllers } from "./controllers/task/DeleteTasksControllers";

const router = Router();

router.post("/task", new CreateTasksControllers().handle);
router.get("/task", new ListTasksControllers().handle);
router.put("/task/:id", new CompleteTasksControllers().handle);
router.delete("/task/:id", new DeleteTasksControllers().handle);

export { router };
