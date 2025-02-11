import { Router } from "express";
import CreateTasksControllers from "./controllers/CreateTasksControllers";
import { ListTasksControllers } from "./controllers/ListTasksControllers";
import { CompleteTasksControllers } from "./controllers/CompleteTasksControllers";
import { DeleteTasksControllers } from "./controllers/DeleteTasksControllers";

const router = Router();

router.post("/task", new CreateTasksControllers().handle);
router.get("/task", new ListTasksControllers().handle);
router.put("/task/:id", new CompleteTasksControllers().handle);
router.delete("/task/:id", new DeleteTasksControllers().handle);

export { router };
