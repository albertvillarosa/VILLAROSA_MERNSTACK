import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import Teachers from "./pages/Teacher";
import AddTeacher from "./pages/AddTeacher";

import "./App.css";

const API_URL = "http://localhost:5000/api";

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [studentsResponse, teachersResponse] =
          await Promise.all([
            fetch(`${API_URL}/students`),
            fetch(`${API_URL}/teachers`),
          ]);

        const studentData = await studentsResponse.json();
        const teacherData = await teachersResponse.json();

        if (!studentsResponse.ok) {
          throw new Error(
            studentData.error ||
              studentData.message ||
              "Failed to fetch students."
          );
        }

        if (!teachersResponse.ok) {
          throw new Error(
            teacherData.error ||
              teacherData.message ||
              "Failed to fetch teachers."
          );
        }

        setStudents(studentData);
        setTeachers(teacherData);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addStudent = async (newStudent) => {
    const response = await fetch(`${API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newStudent,
        id: newStudent.id || Date.now(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ||
          data.message ||
          "Failed to add student."
      );
    }

    setStudents((currentStudents) => [
      ...currentStudents,
      data,
    ]);

    return data;
  };

  const addTeacher = async (newTeacher) => {
    const response = await fetch(`${API_URL}/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newTeacher,
        id: newTeacher.id || Date.now(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ||
          data.message ||
          "Failed to add teacher."
      );
    }

    setTeachers((currentTeachers) => [
      ...currentTeachers,
      data,
    ]);

    return data;
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="container">
          <h2>Loading data from MongoDB...</h2>
          <p>Please wait while the data is being loaded.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {error && (
        <div className="api-error">
          Backend error: {error}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={<Students students={students} />}
        />

        <Route
          path="/student/:id"
          element={
            <StudentDetails students={students} />
          }
        />

        <Route
          path="/student/add"
          element={
            <AddStudent onAddStudent={addStudent} />
          }
        />

        <Route
          path="/teachers"
          element={
            <Teachers teachers={teachers} />
          }
        />

        <Route
          path="/add-teacher"
          element={
            <AddTeacher onAddTeacher={addTeacher} />
          }
        />

        <Route
          path="/login"
          element={
            <div className="container">
              <h1>Login</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;