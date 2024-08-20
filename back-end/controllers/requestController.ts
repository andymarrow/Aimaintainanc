import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const newUser = async (req: Request, res: Response) => {
  const { requester_name,phone_number, priority,request_type,model_no,other_request_type , device_type, email, description,  } = req.body;

  try {
    const user = await prisma.maintenanceRequest.create({
      data: {
        requester_name:requester_name,
        email:email,
        phone_number:phone_number,  // Use the actual phoneNumber value
        description: description || "", 
        priority:priority,
        request_type:request_type,
        other_request_type: other_request_type || "",  
        model_no: model_no || "",  
        device_type:device_type,
      },
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    } else {
      res.status(500).json({ message: "Server error", error: "An unknown error occurred" });
    }
  }
};
