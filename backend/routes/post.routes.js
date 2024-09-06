import express from "express";
import { protectRoute } from "../Middlewares/protectRoute.js";
import {
  commentOnPost,
  createPost,
  deletePost,
  likeUnlikePost,
  getLikedPosts,
  getAllPost
} from "../controllers/postController.js";
const router = express.Router();

router.get("/all",protectRoute,getAllPost);
router.get("/likes/:id",protectRoute,getLikedPosts);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);

export default router;
