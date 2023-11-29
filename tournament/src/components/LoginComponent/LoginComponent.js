import { React } from "react";
import Container from "react-bootstrap/Container";
import { Card, CardBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import { redirect } from "react-router-dom";

const LoginComponent = ({ loginUser }) => {
  const handleLogin = () => {
    let loginData = {
      login: document.getElementById("loginUsername").value,
      password: document.getElementById("loginPassword").value,
    };

    loginUser(loginData.login, loginData.password);

    redirect("/profile");
  };
  return (
    <Container
      className="d-flex justify-content-center "
      style={{ height: "650px" }}
    >
      <Card className="cardRegistration mt-5 w-50">
        <Card.Img variant="top" src="./rugby.png" className="mt-4" />
        <h2>Войти</h2>
        <CardBody className="w-75">
          <Form className="text-center loginforms">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя пользователя"
                id="loginUsername"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                id="loginPassword"
              />
            </Form.Group>
            <Button
              className="w-100 regbtn mt-3"
              type="button"
              onClick={handleLogin}
            >
              <NavLink className="nav-link" to="/profile">
                Войти
              </NavLink>
            </Button>
            <Button className="w-100 regbtn mt-3 mb-5" type="button">
              <NavLink className="nav-link" to="/register">
                Создать профиль
              </NavLink>
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
