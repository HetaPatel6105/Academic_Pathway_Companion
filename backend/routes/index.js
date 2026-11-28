import express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    status: "ok",
    service: "academic-pathway-backend",
  });
});

export default router;