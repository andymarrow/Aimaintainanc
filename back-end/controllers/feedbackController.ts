import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const newFeedbackForm = async (req: Request, res: Response) => {
  const { technicianName, rating, comments  } = req.body;
 console.log(req.body);
  try {
    const user = await prisma.feedback.create({
      data: {
        employee_id: technicianName,
        rating,
        comments: comments  || "", 
       
      },
    });

    res.status(201).json({ message: "Feedback form sent succesfully", user });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    } else {
      res.status(500).json({ message: "Server error", error: "An unknown error occurred" });
    }
  }
};
