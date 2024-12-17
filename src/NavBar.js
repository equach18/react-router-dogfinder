import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavBar.css";

function NavBar({ dogs }) {
  const dogLinks = dogs.map((dog) => (
    <li key={dog.name}>
      <NavLink to={`/dogs/${dog.name.toLowerCase()}`} className="dropdown-item">
        {dog.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="NavBar navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/dogs" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dogs
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {dogLinks}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
