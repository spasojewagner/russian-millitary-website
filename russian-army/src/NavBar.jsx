import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav-logo" />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/leadership">Leadership</Link></li>
        <li><Link to="/structure">Structure</Link></li>
        <li><Link to="/wagner">Wagner</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/joinus">Join Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
