import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./src/models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@school.com",
    password: hashedPassword,
  });

  console.log("Admin created");
  process.exit();
};

createAdmin();
