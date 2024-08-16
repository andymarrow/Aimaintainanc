import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  const trimmedUsername = username.trim();
  console.log('Received Credentials:', { username: trimmedUsername });

  try {
    // Retrieve user from the database
    const user = await prisma.user.findUnique({
      where: { Username: trimmedUsername },
    });

    console.log('Retrieved User:', user);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid user." });
    }

    // JWT secret
    const secret = process.env.JWT_KEY as string;

    if (!secret) {
      throw new Error("No token key is specified in environment variable");
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user.User_id, role: user.Role },
      secret,
      { expiresIn: "1h" }
    );

    console.log("username:", user.Username, "role:", user.Role);
    res.json({ user: { username: user.Username, role: user.Role }, token });

  } catch (err) {
    console.error('Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};
