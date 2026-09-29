import { Link } from "react-router-dom";

function Student({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <p>
        <strong>Student Number:</strong> {student.studentNumber}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Year & Section:</strong> {student.yearSection}
      </p>

      <p>
        <strong>Sex:</strong> {student.sex}
      </p>

      <Link className="button" to={/student/${student.id}}>
        View Full Details
      </Link>
    </div>
  );
}

export default Student;