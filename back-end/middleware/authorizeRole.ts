import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  userId: string;
  role: string;
}

export const authorizeRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.authToken;
    console.log("Token from cookies:", token); // Check if the token is present

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
      const secret = process.env.JWT_KEY as string;
      const decoded = jwt.verify(token, secret) as DecodedToken;

      console.log("Decoded token:", decoded); // Check the decoded token values
      console.log("Allowed roles:", allowedRoles); // Check the roles allowed for the route

      if (!allowedRoles.includes(decoded.role)) {
        console.log("Role not authorized:", decoded.role); // If role isn't allowed, log it
        return res.status(403).json({ message: "Access denied. Insufficient permissions." });
      }

      (req as any).user = decoded; // Use type assertion here
      next();
    } catch (err) {
      console.error("Token verification error:", err); // Log any verification errors
      res.status(400).json({ message: "Invalid token." });
    }
  };
};

