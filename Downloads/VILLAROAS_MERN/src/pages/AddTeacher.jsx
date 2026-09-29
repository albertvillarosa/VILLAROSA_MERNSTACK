import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTeacher({ onAddTeacher }) {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    employeeNumber: "",
    department: "",
    subject: "",
    email: "",
    address: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeacher((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      await onAddTeacher({
        ...teacher,
        id: Date.now(),
      });

      navigate("/teachers");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <h1>Add Teacher</h1>

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
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Employee Number</label>

          <input
            type="text"
            name="employeeNumber"
            value={teacher.employeeNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Department</label>

          <input
            type="text"
            name="department"
            value={teacher.department}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Subject</label>

          <input
            type="text"
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={teacher.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>

          <input
            type="text"
            name="address"
            value={teacher.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="button"
            disabled={saving}
          >
            {saving ? "Saving..." : "Add Teacher"}
          </button>

          <Link
            to="/teachers"
            className="button"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddTeacher;