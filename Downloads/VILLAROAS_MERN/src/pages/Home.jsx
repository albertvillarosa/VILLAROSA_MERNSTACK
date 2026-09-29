import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Student Management</h1>
      <p>Welcome to the Student Directory.</p>

      <Link className="button" to="/students">
        View Students
      </Link>
    </div>
  );
}

export default Home;
