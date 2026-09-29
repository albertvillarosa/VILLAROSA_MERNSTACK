import dotenv from "dotenv";
import mongoose from "mongoose";
import Student from "./models/students.js";
import Teacher from "./models/teachers.js";

dotenv.config();

const students = [
  {
    id: 1,
    name: "Juan Amiel Villarosa",
    studentNumber: "202421312",
    course: "BS Information Technology",
    year: "3rd Year",
    email: "juan.gil@email.com",
    address: "Indang, Cavite"
  },
  {
    id: 2,
    name: "Maria Santos Villarosa",
    studentNumber: "202431232132",
    course: "BS Information Technology",
    year: "3rd Year",
    email: "maria.santos@email.com",
    address: "Tagaytay City, Cavite"
  }
];

const teachers = [
  { id: "F001", name: "Aragon", specialization: "Programming", department: "DIT", sex: "Male" },
  { id: "F002", name: "Cruzat", specialization: "Programming", department: "DIT", sex: "Male" },
  { id: "F003", name: "Baluyot", specialization: "Programming", department: "BFC", sex: "Male" }
];

try {
  await mongoose.connect(process.env.MONGODB_URI);
  await Student.deleteMany({});
  await Teacher.deleteMany({});
  await Student.insertMany(students);
  await Teacher.insertMany(teachers);
  console.log("Students and teachers seeded successfully.");
} catch (error) {
  console.error("Seed failed:", error.message);
} finally {
  await mongoose.disconnect();
}
