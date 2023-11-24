import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from "./components/AboutComponent/AboutComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  //Link,
} from "react-router-dom";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import DownloadsComponent from "./components/DownloadsComponent/DownloadsComponent";
const App = () => {
  return (
    <Router basename="/">
      <Navbar expand="lg">
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
            {/* <Nav.Link>
                <NavLink className="nav-link" to="/profile">
                  Профиль
                </NavLink>
              </Nav.Link> */}
              <Nav.Link>
                <NavLink className="nav-link" to="/downloads">
                  Загрузки
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/aboutus">
                  О нас
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/register">
                  Регистрация
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/login">
                  Логин
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {/* <Route path="/" element={<MainComponent />} /> */}
        <Route path="/profile" element={<ProfileComponent />}></Route>
        <Route path="/aboutus" element={<AboutComponent />} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/downloads" element={<DownloadsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
