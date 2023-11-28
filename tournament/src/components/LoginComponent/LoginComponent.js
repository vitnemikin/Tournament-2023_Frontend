import { React } from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
    <Container>
      <Form>
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
        <Button variant="primary" type="button" onClick={handleLogin}>
          Войти
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
