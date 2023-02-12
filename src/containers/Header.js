import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img
            src={process.env.PUBLIC_URL + "/img/graduate.png"}
            alt="logo"
            className="me-1"
            style={{ maxHeight: "25px" }}
          />
          Student Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/major">
                Major
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/instructors">
                Instructors
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Student
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                welcome to ...{" "}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi-box-arrow-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
