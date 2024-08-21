import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newUser = async (req: Request, res: Response) => {
  const { username, email, password, phoneNumber, role, department } = req.body;

  try {
    const hashedPassword = await bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        phone_number: phoneNumber,
        role: role,
        Department: department,
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
  console.log(departmentName);

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
    console.log(departments);
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export { newUser, newDepartment, getDepartments };
