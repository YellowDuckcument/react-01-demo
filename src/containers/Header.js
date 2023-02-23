import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../store/reducers/auth"

const Header = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.userInfo)

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
              <Nav.Link href="#">welcome to <b className="text-capitalize">{userInfo.fullName}</b> </Nav.Link>
              <Nav.Link onClick={() => dispatch(logout())}>
                <i className="bi-box-arrow-right" />
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
