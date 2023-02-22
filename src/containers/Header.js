import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={process.env.PUBLIC_URL + "/img/graduate.png"}
              alt="logo"
              className="me-1"
              style={{ maxHeight: "25px" }}
            />
            Student Management
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/majors">
              Major
            </Nav.Link>
            <Nav.Link as={NavLink} to="/instructors">
              Instructors
            </Nav.Link>
            <Nav.Link href="#pricing">Student</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#">welcome to ... </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <i className="bi-box-arrow-right" />
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container"> */}
          {/* <Link className="navbar-brand" to="/home">
            <img
              src={process.env.PUBLIC_URL + "/img/graduate.png"}
              alt="logo"
              className="me-1"
              style={{ maxHeight: "25px" }}
            />
            Student Management
          </Link> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          {/* <ul className="navbar-nav">
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
          </ul> */}
        {/* </div>
      </nav> */}
    </>
  );
};

export default Header;
