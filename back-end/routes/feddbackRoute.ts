import express from "express";
import { newFeedbackForm } from "../controllers/feedbackController";

const router = express.Router();

router.post("/newFeedbackForm", newFeedbackForm);

export default router;
