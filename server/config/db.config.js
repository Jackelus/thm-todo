
import mongoose from "mongoose";

export default function connectDB() {

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/thm-todo";

console.log(url);
  try {
    mongoose.connect(url);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
