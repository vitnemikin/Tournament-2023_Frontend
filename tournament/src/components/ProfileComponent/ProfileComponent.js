
import Row from 'react-bootstrap/Row';
import ListGroup from "react-bootstrap/ListGroup";
import  ListGroupItem  from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import { React } from "react";

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