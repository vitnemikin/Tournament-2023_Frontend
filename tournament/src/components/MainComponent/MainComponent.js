import React from "react";
import { useSpring, animated, config } from "react-spring";
import Container from "react-bootstrap/Container";
import { Card, CardBody, CardFooter } from "react-bootstrap";

const MainComponent = () => {
  const cardAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses, // Медленная анимация
  });

  return (
    <Container className="d-flex justify-content-center mb-5">
      <animated.div style={cardAnimation}>
        <Card className="cardMain mt-5 w-75 text-center">
          <Card.Img variant="top" src="./rugby.png" className="mt-4" />
          <CardBody className="w-100">
            <h4>
              Погрузись в мир кода и спорта на захватывающем турнире
              программирования с ItStep Academy. Создай свою команду регбистов,
              напиши умный код для управления игрой и покажи свои навыки
              соперникам!
            </h4>
          </CardBody>
          <CardFooter className="mt-5">
            <p>
              В ItStep Academy мы создаём уникальный практический подход к
              обучению, который сочетает в себе технологии, спорт и игры в самом
              захватывающем сочетании.
            </p>
          </CardFooter>
        </Card>
      </animated.div>
    </Container>
  );
};

export default MainComponent;
