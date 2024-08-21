import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const trimmedUsername = username.trim();
  // console.log(req.body);

  console.log(username);
  const user = await prisma.user.findUnique({
    where: { username: trimmedUsername },
  });
  // console.log(user);

  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      console.log("User not found:", username);
      return res.status(401).json({ message: "Invalid username or password." });
    }

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password comparison:", isMatch);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const secret = process.env.JWT_KEY as string;

      if (!secret) {
        throw new Error("No token key is specified in environment variable");
      }
      const token = jwt.sign(
        { userId: user.user_id, role: user.role },
        secret,
        {
          expiresIn: "1h",
        }
      );
      console.log("username:", user.username, "role:", user.role);

      // Set token in HTTP-only cookie
      res.setHeader(
        "Set-Cookie",
        `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`
      );

      res.json({ user: { username: user.username, role: user.role }, token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
