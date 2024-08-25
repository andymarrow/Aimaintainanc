import express from "express";
import { newUser } from "../controllers/userController";
import {
  newDepartment,
  getDepartments,
  removeDepartment,
  getUsersList,
  updateUserPassword,
} from "../controllers/userController";

const router = express.Router();

router.post("/users", newUser);
router.post("/departments", newDepartment);
router.get("/getDepartments", getDepartments);
router.post("/removeDepartment", removeDepartment);
router.get("/getUsersList", getUsersList);
router.post("/updatePassword", updateUserPassword);

export default router;
