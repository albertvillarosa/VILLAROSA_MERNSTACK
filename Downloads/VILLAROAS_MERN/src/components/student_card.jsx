function StudentCard({ name, age, studentnum, gender, course, year, section }) {
  return (
    <div>
      <p className="text-xl"> Name: {name}</p>
      <p className="text-xl"> Age: {age}</p>
      <p className="text-xl"> StudentNumber: {studentnum}</p>
      <p className="text-xl"> Gender: {gender}</p>
      <p className="text-xl"> Course: {course}</p>
      <p className="text-xl"> Year: {year}</p>
      <p className="text-xl"> Section: {section}</p>
    </div>
  );
}

export default StudentCard;