import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://Sutef:JustSpecter0@cluster0.gtyva9v.mongodb.net/?appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "GLOM_AUTH"
    });
    console.log("📦 Connected to MongoDB — GLOM_AUTH");
  } catch (error) {
    console.error("Mongo Error:", error);
  }
};
