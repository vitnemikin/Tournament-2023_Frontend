import { Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const AboutComponent = () => {
  return(
    <Container></Container>
  )
};


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);