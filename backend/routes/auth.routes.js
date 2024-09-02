import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ data: "You hit signup route" });
});
export default router;
