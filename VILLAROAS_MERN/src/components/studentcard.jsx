function StudentCard({ name, age, studentNum, course, section }) {
  return (
    <div className="text-center">
      <p className="text-xl">Name: {name}</p>
      <p className="text-xl">Age: {age}</p>
      <p className="text-xl">Student Number: {studentNum}</p>
      <p className="text-xl">Course: {course}</p>
      <p className="text-xl">Section: {section}</p>
    </div>
  );
}

export default StudentCard;