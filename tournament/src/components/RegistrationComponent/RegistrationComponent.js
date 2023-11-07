import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistrationComponent = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Введите ваш e-mail адрес " />
          <Form.Text className="text-muted">
            Мы никогда не поделимся вашим мейл адресом с сторонними лицами
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationComponent;
