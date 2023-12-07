import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const ProfileComponent = ({ userData }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    last_name: userData.last_name,
    email: userData.email,
    country: userData.country || "",
    avatar: userData.avatar || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleAvatarChange = (e) => {
  //   const file = e.target.files[0];
  //   const fileUrl = URL.createObjectURL(file);
  //   setFormData((prevData) => ({ ...prevData, avatar: fileUrl }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);

  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h3>Ваш профиль</h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          {/* <img
            src={formData.avatar || "/default-avatar.png"}
            alt="Аватар"
            className="img-fluid rounded-circle"
          />
          {editMode && (
            <Form.Group className="mt-3">
              <Form.Label>Выберите новый аватар</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </Form.Group>
          )} */}
        </Col>
        <Col md={8}>
          <ListGroup>
            <ListGroupItem>
              <strong>Имя:</strong>{" "}
              {editMode ? (
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              ) : (
                userData.name
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Фамилия:</strong>{" "}
              {editMode ? (
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              ) : (
                userData.lastName
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Мейл:</strong>{" "}
              {editMode ? (
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              ) : (
                userData.email
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Страна:</strong>{" "}
              {editMode ? (
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              ) : (
                userData.country || "Не указана"
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {editMode ? (
            <Button variant="success" onClick={handleSubmit}>
              Сохранить изменения
            </Button>
          ) : (
            <Button variant="primary" onClick={() => setEditMode(true)}>
              Редактировать профиль
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { userData } = state;
  return { userData };
};

export default connect(mapStateToProps)(ProfileComponent);
