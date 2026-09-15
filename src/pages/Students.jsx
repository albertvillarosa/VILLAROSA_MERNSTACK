function Students({ students }) {
  return (
    <div className="home-container">
      <h1>View Students</h1>

      <div>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              backgroundColor: "white",
              padding: "20px",
              margin: "15px auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              width: "500px",
              textAlign: "left",
            }}
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
              {student.year || student.yearLevel}
            </p>

            {student.sex && (
              <p>
                <strong>Sex:</strong> {student.sex}
              </p>
            )}

            {student.email && (
              <p>
                <strong>Email:</strong> {student.email}
              </p>
            )}

            {student.address && (
              <p>
                <strong>Address:</strong> {student.address}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;