import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

export const newUser = async (req: Request, res: Response) => {
  const {
    requester_name,
    phone_number,
    priority,
    request_type,
    model_no,
    other_request_type,
    device_type,
    email,
    description,
    employee_id,        // This corresponds to user_id in the user model
    department_name     // This is the name of the department to fetch department_id
  } = req.body;

  try {
    // Fetch the department_id based on the department_name
    let department_id = null;

    if (department_name) {
      const department = await prisma.department.findUnique({
        where: { department_name },
        select: { department_id: true },
      });

      if (department) {
        department_id = department.department_id;
      } else {
        return res.status(400).json({ message: "Invalid department name" });
      }
    }

    const maintenanceRequest = await prisma.maintenanceRequest.create({
      data: {
        requester_name,
        email,
        phone_number,
        description: description || "",
        priority,
        request_type,
        other_request_type: other_request_type || "",
        model_no: model_no || "",
        device_type,
        employee_id,
        department: department_id ? {
          connect: { department_id }
        } : undefined,
        user: {
          connect: { user_id: employee_id } // Connect the initial user
        }
      }
    });

    res.status(201).json({ message: "Maintenance request created successfully", maintenanceRequest });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    } else {
      res.status(500).json({ message: "Server error", error: "An unknown error occurred" });
    }
  }
};

// Controller function to get maintenance requests by employee name
export const getMaintenanceRequests = async (req: Request, res: Response) => {
  
  
  try {
    // Extract the token from the authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token missing or invalid' });
    }
    
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_KEY as string;

    if (!secret) {
      throw new Error("No token key is specified in environment variable");
    }

    // Decode the JWT token
    const decodedToken = jwt.verify(token, secret) as { userId: string };
    const { userId } = decodedToken;
    console.log("User ID from Token:", userId);

    // Fetch the maintenance requests for the user
    const requests = await prisma.maintenanceRequest.findMany({
      where: {
        employee_id: parseInt(userId) // Ensure userId is a number
      }
    });

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
    res.status(500).json({ error: 'An error occurred while fetching maintenance requests' });
  }
};