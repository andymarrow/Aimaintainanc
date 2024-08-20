import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const newUser = async (req: Request, res: Response) => {
  const { username, email, password, phoneNumber, role, department } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        email: email ,
        password: hashedPassword,
        phone_number:phoneNumber,
        role:role,
        // department: department,
      },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
