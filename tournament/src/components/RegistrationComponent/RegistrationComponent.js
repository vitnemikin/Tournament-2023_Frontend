import { React } from "react";
import  Container  from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {registerUser} from "../../redux/actions/actions";


const RegistrationComponent = ({registerUser}) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();

  return (
    <Container>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" id="registrationName"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" id="registrationlastName"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Введите ваш e-mail адрес " id="registrationEmail"/>
          <Form.Text className="text-muted">
            Мы никогда не передадим ваши данные сторонним лицам
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" id="registrationuserName"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" id="registrationPassword"/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => {
            let email = document.querySelector('#registrationEmail').value;
            let name = document.querySelector('#registrationName').value;
            let lastName = document.querySelector('#registrationlastName').value;
            let username = document.querySelector('#registrationuserName').value;
            let password = document.querySelector('#registrationPassword').value;

            const userData = {
              firstName: name,
              lastName: lastName,
              email: email,
              login: username,
              password: password,
            };

            registerUser(userData);
        }}>
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);
