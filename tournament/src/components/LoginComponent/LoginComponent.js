import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginComponent = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя пользователя" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Войти
        </Button>
      </Form>
    </Container>
  );
};

export default LoginComponent;
