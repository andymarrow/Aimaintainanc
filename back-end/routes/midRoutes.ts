import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to extract and verify token
const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies['authToken'];
    if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }

    const secretKey = process.env.JWT_KEY;
    if (!secretKey) {
        res.status(500).json({ error: 'Server configuration error' });
        return;
    }

    try {
        const decoded = jwt.verify(token, secretKey) as { role?: string }; // Adjust according to your token payload
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Route to get user role
router.get('/role', authenticate, (req: Request, res: Response) => {
    const user = (req as any).user; // Type assertion to avoid TypeScript errors
    if (!user || !user.role) {
        res.status(403).json({ error: 'Role not found' });
        return;
    }
    res.json({ role: user.role });
});

export default router;
