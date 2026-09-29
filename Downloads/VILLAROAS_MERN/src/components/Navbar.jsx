import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Student Lists</Link>
      <Link to="/teachers">Teacher Lists</Link>
      <Link to="/add-teacher">Add Teacher</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;