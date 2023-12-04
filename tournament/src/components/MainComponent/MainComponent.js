import React from "react";
import { useSpring, animated, config } from "react-spring";
import Container from "react-bootstrap/Container";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import { useTranslation } from 'react-i18next'

const MainComponent = () => {
  const { t } = useTranslation();
  const cardAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses, 
  });

  return (
    <Container className="d-flex justify-content-center mb-5">
      <animated.div style={cardAnimation}>
        <Card className="cardMain mt-5 w-75 text-center">
          <Card.Img variant="top" src="./rugby.png" className="mt-4" />
          <CardBody className="w-100">
            <h4>
              {t('main_component.description')}
            </h4>
          </CardBody>
          <CardFooter className="mt-5">
            <p>
            {t('main_component.footer')}
            </p>
          </CardFooter>
        </Card>
      </animated.div>
    </Container>
  );
};

export default MainComponent;
