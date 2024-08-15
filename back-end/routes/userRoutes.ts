import express from "express";
import { newUser } from "../controllers/userController";

const router = express.Router();

router.post("/register", newUser);

export default router;
