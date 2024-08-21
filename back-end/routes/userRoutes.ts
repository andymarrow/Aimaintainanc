import express from "express";
import { newUser } from "../controllers/userController";
import { newDepartment } from "../controllers/userController";
import { getDepartments } from "../controllers/userController";
const router = express.Router();

router.post("/users", newUser);
router.post("/departments", newDepartment);
router.get("/getDepartments", getDepartments);

export default router;
