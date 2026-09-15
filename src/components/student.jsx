function StudentCard({
  name,
  studentNum,
  course,
  year,
  section,
}) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Age:</strong> {year}
      </p>

      <p>
        <strong>Student Number:</strong> {studentNum}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Section:</strong> {section}
      </p>
    </div>
  );
}

export default StudentCard;