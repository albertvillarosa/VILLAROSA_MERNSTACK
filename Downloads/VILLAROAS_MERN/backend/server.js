import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Student from "./models/students.js";
import Teacher from "./models/teachers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Villarosa MERN Backend is running!",
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "hello from express",
  });
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ id: 1 });

    res.status(200).json(students);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
});

app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ id: 1 });

    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch teachers",
      error: error.message,
    });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    const studentData = {
      ...req.body,
      id: req.body.id || Date.now(),
    };

    const student = await Student.create(studentData);

    res.status(201).json(student);
  } catch (error) {
    console.error("Student error:", error);

    res.status(400).json({
      message: "Failed to add student",
      error: error.message,
    });
  }
});

app.post("/api/teachers", async (req, res) => {
  try {
    const teacherData = {
      ...req.body,
      id: req.body.id || Date.now(),
    };

    const teacher = await Teacher.create(teacherData);

    res.status(201).json(teacher);
  } catch (error) {
    console.error("Teacher error:", error);

    res.status(400).json({
      message: "Failed to add teacher",
      error: error.message,
    });
  }
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Backend running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  });