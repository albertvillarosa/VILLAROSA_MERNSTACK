import { Link } from "react-router-dom";

function Students({ students }) {
  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1>Students</h1>
          <p>Student records from MongoDB</p>
        </div>

        <Link
          to="/student/add"
          className="button"
        >
          Add Student
        </Link>
      </div>

      <div className="card-grid">
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <div
              className="details-card"
              key={student._id || student.id}
            >
              <h2>{student.name}</h2>

              <p>
                <strong>Student Number:</strong>{" "}
                {student.studentNumber}
              </p>

              <p>
                <strong>Course:</strong>{" "}
                {student.course}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {student.year}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {student.email || "N/A"}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {student.address || "N/A"}
              </p>

              <p>
                <strong>Sex:</strong>{" "}
                {student.sex || "N/A"}
              </p>

              <Link
                to={`/student/${student.id}`}
                className="button"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Students;