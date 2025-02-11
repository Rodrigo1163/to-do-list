import { Router } from "express";
import CreateTasksControllers from "./controllers/CreateTasksControllers";
import { ListTasksControllers } from "./controllers/ListTasksControllers";

const router = Router();

router.post("/task", new CreateTasksControllers().handle);
router.get("/task", new ListTasksControllers().handle);

export { router };
