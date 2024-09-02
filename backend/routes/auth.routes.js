import express from "express";
import { logout, signIn, signup } from "../controllers/authcontroller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);
router.get("/logout", logout);
export default router;
