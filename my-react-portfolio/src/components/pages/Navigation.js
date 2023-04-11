import { Link } from "react-router-dom";

function Navigation({ currentPage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about"
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
