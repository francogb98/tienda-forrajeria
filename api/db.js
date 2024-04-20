import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_DB_NAME}:${process.env.MONGO_PASSWORD}@c${process.env.MONGO_DATA}/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected MongoDB");
  })
  .catch((error) => {
    console.error("error onnection to mongodb", error.message);
  });







