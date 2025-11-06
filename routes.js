import express from "express";
import prisma from "./db.js";
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

export default router;
