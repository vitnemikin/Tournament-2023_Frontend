import { React } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, CardBody } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/actions";

const RegistrationComponent = ({ registerUser }) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();

  return (
    <Container className="d-flex justify-content-center">
      <Card className="cardRegistration mt-5 w-75">
        <Card.Img variant="top" src="./rugby.png" className="mt-4" />
        <h2>Регистрация</h2>
        <CardBody className="w-75">
          <Form className="text-center regforms">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваше имя"
                id="registrationName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите вашу фамилию"
                id="registrationlastName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите ваш e-mail адрес "
                id="registrationEmail"
              />
              <Form.Text className="text-muted mutedcolor">
                Мы никогда не передадим ваши данные сторонним лицам
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя пользователя"
                id="registrationuserName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                id="registrationPassword"
              />
            </Form.Group>
            <Button
              type="button"
              className="w-100 regbtn mt-3"
              onClick={() => {
                let email = document.querySelector("#registrationEmail").value;
                let name = document.querySelector("#registrationName").value;
                let lastName = document.querySelector(
                  "#registrationlastName"
                ).value;
                let username = document.querySelector(
                  "#registrationuserName"
                ).value;
                let password = document.querySelector(
                  "#registrationPassword"
                ).value;

                const userData = {
                  firstName: name,
                  lastName: lastName,
                  email: email,
                  login: username,
                  password: password,
                };

                registerUser(userData);
              }}
            >
              Создать профиль
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = { registerUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
