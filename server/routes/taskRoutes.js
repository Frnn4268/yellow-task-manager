import express from "express";
import {
  createTask,
  duplicateTask,
  postTaskActivity,
} from "../controllers/taskController.js";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", protectRoute, isAdminRoute, createTask);
router.post("/duplicate/:id", protectRoute, isAdminRoute, duplicateTask);
router.post("/activity/:id", protectRoute, postTaskActivity);

export default router;
