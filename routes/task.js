import express from "express";
import { deleteTask, getMytasks, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get(
    "/new", isAuthenticated ,newTask
)


router.get(
    "/all" , isAuthenticated ,getMytasks
)

router.route("/:id").put( updateTask).delete(deleteTask)


export default router;