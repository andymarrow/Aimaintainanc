import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

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

     // Step 1: Fetch the department_id based on the department_name
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

     
    const data: any = {
      requester_name,
      email,
      phone_number,
      description: description || "",
      priority,
      request_type,
      other_request_type: other_request_type || "",
      model_no: model_no || "",
      device_type,
      employee_id,        // Directly setting the employee_id field
      department_id,      // Include the retrieved department_id
       };

    // if (department_id) {
    //   data.department_id = department_id;  // Directly setting the department_id field
    // }

    const maintenanceRequest = await prisma.maintenanceRequest.create({
      data,
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
  const employeeName = req.headers['x-employee-name'] as string;

  console.log(employeeName)
  try {
    if (!employeeName) {
      return res.status(400).json({ error: 'Employee name is required' });
    }

    // Query the database for maintenance requests with the provided employee name
    const requests = await prisma.maintenanceRequest.findMany({
      where: {
        requester_name: employeeName,
      },
    });
    console.log(requests)

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
    res.status(500).json({ error: 'An error occurred while fetching maintenance requests' });
  }
};
