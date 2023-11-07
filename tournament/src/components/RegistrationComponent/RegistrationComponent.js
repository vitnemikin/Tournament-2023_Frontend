import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {registerUser} from "../../redux/actions/actions";


const RegistrationComponent = ({registerUser}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Введите ваш e-mail адрес " id="registrationEmail"/>
          <Form.Text className="text-muted">
            Мы никогда не поделимся вашим мейл адресом с сторонними лицами
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" id="registrationUsername"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" id="registrationPassword"/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {
            let email = document.querySelector('#registrationEmail').value;
            let username = document.querySelector('#registrationUsername').value;
            let password = document.querySelector('#registrationPassword').value;

            const userData = {
              username: username,
              email: email,
              password: password,
              userIsRegistered: true,
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
  return {};
};

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);
