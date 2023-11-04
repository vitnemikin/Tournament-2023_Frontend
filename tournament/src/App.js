import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
const App = () => {
  return (
    <Router basename="/">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand >
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="nav-link" to="/">
                  Основная страница
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/aboutus">
                  О нас
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/aboutus" element={<AboutComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
