import express from "express";
import { newUser } from "../controllers/userController";
import {
  newDepartment,
  getDepartments,
  removeDepartment,
  getUsersList,
} from "../controllers/userController";

const router = express.Router();

router.post("/users", newUser);
router.post("/departments", newDepartment);
router.get("/getDepartments", getDepartments);
router.post("/removeDepartment", removeDepartment);
router.get("/getUsersList", getUsersList);

export default router;
