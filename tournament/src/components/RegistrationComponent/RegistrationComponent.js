import { React, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, CardBody } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import { useTranslation } from "react-i18next";

const RegistrationComponent = ({ registerUser, emailSent }) => {
  const { t } = useTranslation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const lastnameRef = useRef(null);
  const loginRef = useRef(null);

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
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>{t("registration_component.lastname")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("registration_component.enter_lastname")}
                ref={lastnameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("registration_component.email")}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("registration_component.enter_email")}
                ref={emailRef}
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
                ref={loginRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("registration_component.password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t("registration_component.enter_password")}
                ref={passwordRef}
              />
            </Form.Group>
            <Button
              type="button"
              className="w-100 regbtn mt-3"
              onClick={() => {
                let email = emailRef.current.value;
                let name = nameRef.current.value;
                let lastName = lastnameRef.current.value;
                let username = loginRef.current.value;
                let password = passwordRef.current.value;

                const userData = {
                  first_name: name,
                  last_name: lastName,
                  email: email,
                  login: username,
                  password: password,
                };

                registerUser(userData);
              }}
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
