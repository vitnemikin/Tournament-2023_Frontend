import { React, useRef } from "react";
import Container from "react-bootstrap/Container";
import { Card, CardBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
// import { redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginComponent = ({ loginUser, isLoggedIn }) => {
  const { t } = useTranslation();

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    let loginData = {
      login: loginRef.current.value,
      password: passwordRef.current.value
    };
    loginUser(loginData.login, loginData.password);
  };
  return (
    <Container
      className="d-flex justify-content-center "
      style={{ height: "650px" }}
    >
      <Card className="cardRegistration mt-5 w-50">
        <Card.Img variant="top" src="./rugby.png" className="mt-4" />
        <h2>{t("login_component.login")}</h2>
        <CardBody className="w-75">
          <Form className="text-center loginforms">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("login_component.username")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("login_component.enter_username")}
                id="loginUsername"
                ref={loginRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("login_component.password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t("login_component.enter_password")}
                id="loginPassword"
                ref={passwordRef}
              />
            </Form.Group>
            <Button
              className="w-100 regbtn mt-3"
              type="button"
              onClick={handleLogin}
            >
              {/* <NavLink className="nav-link" to="/profile">
           
              </NavLink> */}
              {t("login_component.sign_in")}
            </Button>
            <Button className="w-100 regbtn mt-3 mb-5" type="button">
              <NavLink className="nav-link" to="/register">
                {t("login_component.sign_up")}
              </NavLink>
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state;
  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
