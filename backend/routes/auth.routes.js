import express from "express";
const router = express.Router();

router.get("/signup", (req, res) => {
  res.json({ data: "You hit signup route" });
});
export default router;
