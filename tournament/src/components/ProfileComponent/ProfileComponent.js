
import { Card, Container, Row, Col, Stack, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const ProfileComponent = () => {
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);