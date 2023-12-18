import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, CardBody } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import { useTranslation } from "react-i18next";

const RegistrationComponent = ({ registerUser, emailSent }) => {
  const { t } = useTranslation();
  const {userData, setUserData } = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    login: ''
  });
  
  const handleFormSubmit = () => {
    registerUser(userData);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="cardRegistration mt-5 w-75">
        <Card.Img variant="top" src="./rugby.png" className="mt-4" />
        <h2>{t("registration_component.registration")}</h2>
        <CardBody className="w-75">
          <Form className="text-center regforms">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{t("registration_component.name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("registration_component.enter_name")}
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>{t("registration_component.lastname")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("registration_component.enter_lastname")}
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("registration_component.email")}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("registration_component.enter_email")}
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <Form.Text className="text-muted mutedcolor">
                {t("registration_component.third_parties")}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>{t("registration_component.username")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("registration_component.enter_username")}
                value={userData.login}
                onChange={(e) => setUserData({ ...userData, login: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("registration_component.password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t("registration_component.enter_password")}
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </Form.Group>
            <Button
              type="button"
              className="w-100 regbtn mt-3"
              onClick={handleFormSubmit}
            >
              {t("registration_component.sign_up")}
            </Button>
            {emailSent && (
              <Form.Text className="text-muted mutedcolor">
                {t("registration_component.email_sent")}
              </Form.Text>
            )}
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { emailSent } = state;
  return {
    emailSent,
  };
};

const mapDispatchToProps = { registerUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
