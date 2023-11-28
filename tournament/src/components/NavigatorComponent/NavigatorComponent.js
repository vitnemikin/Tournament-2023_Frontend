import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import {
  NavLink,
} from "react-router-dom";

const NavigatorComponent = (state) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
                  <NavLink className="nav-link" to="/register">
                    Регистрация
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="nav-link" to="/login">
                    Логин
                  </NavLink>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn, isAdmin } = state;
  return { isLoggedIn, isAdmin };
}

// function mapDispatchToProps() {}

export default connect(mapStateToProps)(NavigatorComponent);
