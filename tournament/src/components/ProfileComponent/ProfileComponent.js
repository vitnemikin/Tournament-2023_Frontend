
import Row from 'react-bootstrap/Row';
import ListGroup from "react-bootstrap/ListGroup";
import  ListGroupItem  from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import { React } from "react";

const ProfileComponent = (state) => {
  return (
    <Container>
    <Row>Ваш профиль</Row>
    <ListGroup>
        <ListGroupItem>Имя: {state.userData.name}</ListGroupItem>
        <ListGroupItem>Фамилия: {state.userData.lastName}</ListGroupItem>
        <ListGroupItem>Мейл: {state.userData.email}</ListGroupItem>
    </ListGroup>
  </Container>
  )


}

const mapStateToProps = (state) => {

    const {userData} = state;

    return userData;
    
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);