import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import React from "react";

const AboutComponent = () => {
  return <Container></Container>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);
