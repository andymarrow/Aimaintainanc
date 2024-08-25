import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newUser = async (req: Request, res: Response) => {
  const { username, email, password, phoneNumber, role, department } = req.body;

  try {
    const hashedPassword = await bcrypt.hashSync(password, 10);

    const departments = await prisma.department.findUnique({
      where: {
        department_name: department,
      },
    });
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        phone_number: phoneNumber,
        role: role,
        Department: {
          connect: {
            department_id: departments?.department_id,
          },
        },
      },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const newDepartment = async (req: Request, res: Response) => {
  const { departmentName } = req.body;
  // console.log(departmentName);

  try {
    const department = await prisma.department.create({
      data: { department_name: departmentName },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany();
    // console.log(departments);
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const removeDepartment = async (req: Request, res: Response) => {
  const { departmentName } = req.body;
  console.log(departmentName);

  try {
    const department = await prisma.department.delete({
      where: { department_name: departmentName },
    });

    res.status(200).json({ message: "Department deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsersList = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      where: { activated: true },
    });
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// Use the secret from environment variables
const secret = process.env.JWT_KEY || 'default_secret'; // Fallback to a default secret if env variable is not set


const updateUserPassword = async (req: Request, res: Response) => {
  const { username, currentPassword, newPassword } = req.body;
  console.log(`${username},${currentPassword},${newPassword}`)
  try {
    // Find the user by username
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    // If user does not exist, return an error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the current password matches
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        password: hashedNewPassword,
      },
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
export {
  newUser,
  newDepartment,
  getDepartments,
  removeDepartment,
  getUsersList,
  updateUserPassword,
};
