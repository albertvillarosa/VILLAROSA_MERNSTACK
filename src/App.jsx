import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import studentData from "./data/student.json";

function App() {
  const [students, setStudents] = useState(studentData);

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        ...newStudent,
      },
    ]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/students"
        element={<Students students={students} />}
      />

      <Route
        path="/add-student"
        element={<AddStudent addStudent={addStudent} />}
      />
    </Routes>
  );
}

export default App;