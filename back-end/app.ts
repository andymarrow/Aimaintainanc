import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { handleChatbotMessage } from "./controllers/chatbotIntents";
import * as dotenv from 'dotenv';

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);
// Example route
// Chatbot route using the intent handler from chatbotIntents.ts
app.post('/chatbot', (req: Request, res: Response) => {
  const { message } = req.body;
  const response = handleChatbotMessage(message); // Use the imported function
  res.status(200).json({ response });
});

const PORT = process.env.port || 3002;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
