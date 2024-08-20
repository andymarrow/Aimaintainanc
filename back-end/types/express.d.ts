import { Request } from 'express';

// Extend the Express Request interface to include userRole
declare module 'express-serve-static-core' {
    interface Request {
        userRole?: string;
    }
}
