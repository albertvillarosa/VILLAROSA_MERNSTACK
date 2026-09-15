import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Student Management System</h1>

      <p>Manage your students easily.</p>

      <div className="home-buttons">
        <Link to="/students" className="home-button">
          View Students
        </Link>

        <Link to="/add-student" className="home-button">
          Add Student
        </Link>
      </div>
    </div>
  );
}

export default Home;