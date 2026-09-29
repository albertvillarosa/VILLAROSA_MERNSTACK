import { Link } from "react-router-dom";

function Teachers({ teachers }) {
  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1>Teachers</h1>
          <p>Teacher records from MongoDB</p>
        </div>

        <Link
          to="/add-teacher"
          className="button"
        >
          Add Teacher
        </Link>
      </div>

      <div className="card-grid">
        {teachers.length === 0 ? (
          <p>No teachers found.</p>
        ) : (
          teachers.map((teacher) => (
            <div
              className="details-card"
              key={teacher._id || teacher.id}
            >
              <h2>{teacher.name}</h2>

              <p>
                <strong>Employee Number:</strong>{" "}
                {teacher.employeeNumber || "N/A"}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {teacher.department || "N/A"}
              </p>

              <p>
                <strong>Subject:</strong>{" "}
                {teacher.subject || "N/A"}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {teacher.email || "N/A"}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {teacher.address || "N/A"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Teachers;