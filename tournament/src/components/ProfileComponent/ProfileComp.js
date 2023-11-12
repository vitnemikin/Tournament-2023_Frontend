
import { Card, Container, Row, Col, Stack, ListGroup, ListGroupItem } from "react-bootstrap";

const ProfileComp = () => {
  return (
    <Container>
    <Row>Ваш профиль</Row>
    <ListGroup>
        <ListGroupItem>Имя</ListGroupItem>
        <ListGroupItem>Фамилия</ListGroupItem>
        <ListGroupItem>Отчество</ListGroupItem>
        <ListGroupItem>Рейтинг</ListGroupItem>
    </ListGroup>
  </Container>
  )


}

export default ProfileComp;