import mongoose from "mongoose";

const mongoDB = process.env.MONGO_URI!;

export default function connectDB() {
  mongoose.connect(mongoDB);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}
