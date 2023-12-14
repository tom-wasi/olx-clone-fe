import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token") !== null;
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <div className="body">
      <Navbar bg="green" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon="fa-brands fa-shopify" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="body nav-link" to="/home">Home</NavLink>
            </Nav>
            {isAuthenticated ? (
              <>
                <Button variant="outline-info" className="me-2" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <Button variant="outline-info" className="me-2">Login</Button>
                </NavLink>
                <NavLink to="/register">
                  <Button variant="outline-info" className="me-2">Register</Button>
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;