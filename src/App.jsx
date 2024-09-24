import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";
import Formulario3 from "./Formulario3";
import Formulario4 from "./Formulario4";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Mega Store 2.1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Articulos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/formulario1">
                  Marca (Formulario 1)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/formulario2">
                  Articulo (Formulario 2)
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pedidos" id="basic-nav-dropdown-2">
                <NavDropdown.Item as={Link} to="/formulario3">
                  Submenú 2.1 (Formulario 3)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/formulario4">
                  Submenú 2.2 (Formulario 4)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/formulario1" element={<Formulario1 />} />
          <Route path="/formulario2" element={<Formulario2 />} />
          <Route path="/formulario3" element={<Formulario3 />} />
          <Route path="/formulario4" element={<Formulario4 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
