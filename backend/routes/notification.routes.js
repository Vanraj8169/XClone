import express from "express";
import { protectRoute } from "../Middlewares/protectRoute.js";
import {
  deleteNotifications,
  getNotifications,
  deleteNotification
} from "../controllers/notificationController.js";
const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/:id",protectRoute,deleteNotification);
export default router;
