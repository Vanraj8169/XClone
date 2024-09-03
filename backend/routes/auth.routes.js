import express from "express";
import { logout, login, signup, getMe } from "../controllers/authcontroller.js";
import { protectRoute } from "../Middlewares/protectRoute.js";
const router = express.Router();

router.get("/me",protectRoute,getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
