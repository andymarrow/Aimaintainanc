import express from "express";
import { newUser } from "../controllers/requestController";

const router = express.Router();

router.post("/newForm", newUser);

export default router;
