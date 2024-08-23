import express from "express";
import { newUser } from "../controllers/requestController";
import { getMaintenanceRequests } from "../controllers/requestController";
const router = express.Router();

router.post("/newForm", newUser);
router.post("/maintenancerequests", getMaintenanceRequests);

export default router;
