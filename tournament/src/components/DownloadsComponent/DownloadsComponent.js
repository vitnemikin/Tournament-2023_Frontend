import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { downloadGame } from "../../redux/actions/actions";

const DownloadsComponent = (downloadGame) => {
  const detectOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.indexOf("win") !== -1) {
      return "windows";
    } else if (userAgent.indexOf("mac") !== -1) {
      return "macos";
    } else if (userAgent.indexOf("linux") !== -1) {
      return "linux";
    }

    return "unknown";
  };

  const handleDownload = () => {
    const os = detectOS();

    downloadGame(os);
  };

  return (
    <Container>
      <Button variant="primary" type="submit" onClick={handleDownload}>
        Скачать игру
      </Button>
    </Container>
  );
};

export default DownloadsComponent;
