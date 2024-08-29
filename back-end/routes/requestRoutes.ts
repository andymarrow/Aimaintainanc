import express from "express";
import { newUser } from "../controllers/requestController";
import { getMaintenanceRequests } from "../controllers/requestController";
import { getMaintenanceRequestsApproval } from "../controllers/requestController";
import { getMaintenanceRequestsByName } from "../controllers/requestController";
import { updateRequestStatus } from "../controllers/requestController";
import { getDepartmentName } from "../controllers/requestController";

import { getUserInfo } from "../controllers/requestController";

const router = express.Router();

router.post("/newForm", newUser);
router.post("/maintenancerequests", getMaintenanceRequests);
router.post("/maintenancerequestsApproval", getMaintenanceRequestsApproval);
router.get("/maintenanceRequests/:request_id", getMaintenanceRequestsByName);
router.patch("/maintenanceRequests/:request_id/status", updateRequestStatus);

router.get("/userInfo/:userId", getUserInfo);
router.get("/department/:departmentId", getDepartmentName);

export default router;