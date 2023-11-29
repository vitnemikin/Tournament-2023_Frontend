import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { confirmUser } from "../../redux/actions/actions";
import { Container } from "react-bootstrap";
const ConfirmationComponent = ({confirmUser}) => {
  const { username, token } = useParams();

  useEffect(() => {
    confirmUser(username, token);
  }, [username, token]);


  return (
    <Container>
           <Card className="cardMain mt-5 w-75 text-center">
          <Card.Img variant="top" src="./rugby.png" className="mt-4" />
          <CardBody className="w-100">
            <h4>
                Подтверждение регистрации...
            </h4>
          </CardBody>
        </Card>
    </Container>
  )
};


const mapStateToProps = (state) => {
    return {};
  };
  
  const mapDispatchToProps = {  confirmUser };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationComponent);
