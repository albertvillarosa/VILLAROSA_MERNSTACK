import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    studentNumber: "",
    course: "",
    year: "",
    email: "",
    address: "",
    sex: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      await onAddStudent({
        ...student,
        id: Date.now(),
      });

      navigate("/students");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <h1>Add Student</h1>

      <form
        onSubmit={handleSubmit}
        className="details-card"
      >
        {error && (
          <div className="api-error">
            {error}
          </div>
        )}

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Student Number</label>

          <input
            type="text"
            name="studentNumber"
            value={student.studentNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Course</label>

          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Year</label>

          <input
            type="text"
            name="year"
            value={student.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>

          <input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sex</label>

          <select
            name="sex"
            value={student.sex}
            onChange={handleChange}
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="button"
            disabled={saving}
          >
            {saving ? "Saving..." : "Add Student"}
          </button>

          <Link
            to="/students"
            className="button"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;