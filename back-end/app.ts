import express, { Response, Request } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const PORT = process.env.port || 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
