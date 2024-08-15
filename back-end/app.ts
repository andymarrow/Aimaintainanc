import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);

const PORT = process.env.port || 3002;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
