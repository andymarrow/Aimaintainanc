import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(req.body);

  // const user1 =
  //   // await prisma.$queryRaw`select * from user Where Username = 'amaya'`;
  // console.log(user1);

  const user = await prisma.user.findUnique({
    where: { Username: username },
  });
  console.log(user);

  try {
    const user = await prisma.user.findUnique({
      where: { Username: username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid user." });
    }
    if (user) {
      const isMatch = await bcrypt.compare(password, user.Password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const secret = process.env.JWT_KEY as string;

      if (!secret) {
        throw new Error("No token key is specified in environment variable");
      }
      const token = jwt.sign(
        { userId: user.User_id, role: user.Role },
        secret,
        {
          expiresIn: "1h",
        }
      );
      res.json({ user: { username: user.Username, role: user.Role }, token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
