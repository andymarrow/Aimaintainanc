import express from "express";
import { loginUser } from "../controllers/authController";
import { authorize } from "../middleware/authorize";

const router = express.Router();

router.post("/login", loginUser);

// Example protected routes
router.get('/admin/dashboard', authorize(['admin']), (req, res) => {
    res.send('Admin Dashboard');
});

router.get('/employee/emp_dashboard', authorize(['employee']), (req, res) => {
    res.send('Employee Dashboard');
});
// Example protected routes
router.get('/department/allRequest', authorize(['department']), (req, res) => {
    res.send('department Dashboard');
});

router.get('/dashboard/dashboardHome', authorize(['maintainance']), (req, res) => {
    res.send('maintainance Dashboard');
});

router.get('/technician/allHistory', authorize(['technician']), (req, res) => {
    res.send('technician Dashboard');
});


export default router;
