import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";

import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

mongoose.connect(
  // "mongodb+srv://indivari:indi.1234@cluster0.173bx.mongodb.net/booking?retryWrites=true&w=majority"
  process.env.MONGO
);

mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});

//middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  return res.status(500).json(err);
});

app.listen(8800, () => {
  console.log("connected to the backend.");
});
