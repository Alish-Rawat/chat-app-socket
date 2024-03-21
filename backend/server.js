import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectMongoDB from "./db/connectToMongoDb.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads from (req.body)

app.use(cookieParser()); //  to use cookies in app

app.get("/", (req, res) => {
  res.send("Express is Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, (req, res) => {
  connectMongoDB();
  console.log("server Running on Port : ", PORT);
});
