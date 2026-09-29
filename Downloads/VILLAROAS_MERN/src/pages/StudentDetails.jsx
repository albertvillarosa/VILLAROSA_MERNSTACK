import { Link, useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((item) => item.id === Number(id));
  if (!student) return <div className="container"><h1>Student Not Found</h1><Link to="/students" className="button">Back to Students</Link></div>;
  return (
    <div className="container">
      <h1>Student Details</h1>
      <details className="details-card" open>
        <summary>{student.name}</summary>
        <p><strong>Student Number:</strong> {student.studentNumber}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Address:</strong> {student.address}</p>
        {student.sex && <p><strong>Sex:</strong> {student.sex}</p>}
        <Link to="/students" className="button">Back to Students</Link>
      </details>
    </div>
  );
}
export default StudentDetails;
