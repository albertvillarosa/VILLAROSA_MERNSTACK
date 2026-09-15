import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ addStudent }) {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    studentNumber: "",
    course: "",
    yearLevel: "",
    sex: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(student);

    navigate("/students");
  };

  return (
    <div className="home-container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <br />

        <div>
          <label>Student Number</label>
          <br />
          <input
            type="text"
            name="studentNumber"
            value={student.studentNumber}
            onChange={handleChange}
            placeholder="Enter student number"
            required
          />
        </div>

        <br />

        <div>
          <label>Course</label>
          <br />
          <select
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="BS Information Technology">
              BS Information Technology
            </option>
            <option value="BS Computer Science">
              BS Computer Science
            </option>
            <option value="BS Information Systems">
              BS Information Systems
            </option>
          </select>
        </div>

        <br />

        <div>
          <label>Year Level</label>
          <br />
          <select
            name="yearLevel"
            value={student.yearLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Year Level</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <br />

        <div>
          <label>Sex</label>
          <br />
          <select
            name="sex"
            value={student.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default AddStudent;