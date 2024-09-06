import express from "express";
import { protectRoute } from "../Middlewares/protectRoute.js";
import {
  commentOnPost,
  createPost,
  deletePost,
  likeUnlikePost,
} from "../controllers/postController.js";
const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);

export default router;
