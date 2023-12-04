import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from 'react-i18next'
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles.scss";

const NavigatorComponent = ({ isLoggedIn }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Navbar expand="lg" className="navBar">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Image src="./rugby.png" style={{ width: "5%" }} />
        <div style={{ flexBasis: "25%", marginTop: "60px" }}>
          <h4>{t('navigator_component.itstep')}</h4>
        </div>
        <Nav className="me-auto ms-2">
          <Nav.Link>
            <NavLink className="nav-link" to="/">
              {t('navigator_component.main_page')}
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="nav-link" to="/downloads">
              {t('navigator_component.downloads')}
            </NavLink>
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link>
                <NavLink className="nav-link" to="/profile">
                  {t('navigator_component.profile')}
                </NavLink>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <NavLink className="nav-link" to="/login">
                  {t('navigator_component.login')}
                </NavLink>
              </Nav.Link>
            </>
          )}
        </Nav>
        <NavDropdown title={t('navigator_component.language')} id="language-dropdown" className="col-2 drop">
          <NavDropdown.Item onClick={() => {changeLanguage('ru')}}>Русский</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {changeLanguage('kz')}}>Казах</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {changeLanguage('en')}}>English</NavDropdown.Item>
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
