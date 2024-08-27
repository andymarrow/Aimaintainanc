import express from "express";
import { newUser } from "../controllers/requestController";
import { getMaintenanceRequests } from "../controllers/requestController";
import { getUserInfo } from "../controllers/requestController";

const router = express.Router();

router.post("/newForm", newUser);
router.post("/maintenancerequests", getMaintenanceRequests);
router.get("/userInfo/:userId", getUserInfo);

export default router;
