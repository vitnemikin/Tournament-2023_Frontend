import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles.scss";

const NavigatorComponent = (state) => {
  return (
    <Navbar expand="lg" className="navBar">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Image src="./rugby.png" style={{width: '5%'}} />
        <div style={{ flexBasis: "25%", marginTop: '60px' }}>
          <h4>Академия Шаг</h4>
        </div>
        <Nav className="me-auto ms-2">
          <Nav.Link>
            <NavLink className="nav-link" to="/">
              Основная страница
            </NavLink>
          </Nav.Link>
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
          {state.isLoggedIn ? (
            <>
              <Nav.Link>
                <NavLink className="nav-link" to="/profile">
                  Профиль
                </NavLink>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <NavLink className="nav-link" to="/login">
                  Войти
                </NavLink>
              </Nav.Link>
            </>
          )}
        </Nav>
        <NavDropdown title="Язык" id="language-dropdown" className="col-2 drop">
          <NavDropdown.Item>Русский</NavDropdown.Item>
          <NavDropdown.Item>Казах</NavDropdown.Item>
          <NavDropdown.Item>English</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn, isAdmin } = state;
  return { isLoggedIn, isAdmin };
}

// function mapDispatchToProps() {}

export default connect(mapStateToProps)(NavigatorComponent);
