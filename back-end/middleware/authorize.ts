import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): Response | void => {
        try {
            // Extract token from cookies
            const token = req.cookies['authToken'];
            if (!token) {
                return res.status(401).send({ error: 'Access Denied: No Token Provided!' });
            }

            // Check if JWT_KEY is defined
            const secretKey = process.env.JWT_KEY;
            if (!secretKey) {
                throw new Error('JWT secret key is not defined in environment variables.');
            }

            // Verify token and get user role
            const decoded: any = jwt.verify(token, secretKey);

            // Check if the user role is authorized
            if (!roles.includes(decoded.role)) {
                return res.status(403).send({ error: 'Access Denied: Unauthorized Role!' });
            }

            // Attach user role to request object
            (req as any).userRole = decoded.role; // Type assertion to avoid TypeScript errors

            next();
        } catch (error) {
            // Type guard to ensure error is an instance of Error
            if (error instanceof Error) {
                return res.status(400).send({ error: error.message });
            }
            return res.status(400).send({ error: 'An unknown error occurred!' });
        }
    };
};

