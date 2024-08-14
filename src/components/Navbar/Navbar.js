
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css'; 

const Navbar = () => (
  <BootstrapNavbar className="custom-navbar" expand="lg">
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BootstrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Today's Sales
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard2">
          Sales Comparison
        </Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);

export default Navbar;
