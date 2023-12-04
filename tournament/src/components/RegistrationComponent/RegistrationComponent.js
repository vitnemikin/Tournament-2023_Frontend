import { React } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, CardBody } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import { useTranslation } from "react-i18next";

const RegistrationComponent = ({ registerUser }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const dispatch = useDispatch();

  return (
    <Container className="d-flex justify-content-center">
      <Card className="cardRegistration mt-5 w-75">
        <Card.Img variant="top" src="./rugby.png" className="mt-4" />
        <h2>{t('registration_component.registration')}</h2>
        <CardBody className="w-75">
          <Form className="text-center regforms">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{t('registration_component.name')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('registration_component.enter_name')}
                id="registrationName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>{t('registration_component.lastname')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('registration_component.enter_lastname')}
                id="registrationlastName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t('registration_component.email')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('registration_component.enter_email')}
                id="registrationEmail"
              />
              <Form.Text className="text-muted mutedcolor">
              {t('registration_component.third_parties')}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>{t('registration_component.username')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('registration_component.enter_username')}
                id="registrationuserName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t('registration_component.password')}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('registration_component.enter_password')}
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
                  first_name: name,
                  last_name: lastName,
                  email: email,
                  login: username,
                  password: password,
                };

                registerUser(userData);
              }}
            >
              {t('registration_component.sign_up')}
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
