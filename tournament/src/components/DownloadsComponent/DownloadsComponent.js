import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";
import { downloadGame } from "../../redux/actions/actions";

const DownloadsComponent = ({ downloadGame }) => {
  const [os, setOs] = useState("unknown");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (userAgent.indexOf("win") !== -1) {
        setOs("windows");
      } else if (userAgent.indexOf("mac") !== -1) {
        setOs("macos");
      } else if (userAgent.indexOf("linux") !== -1) {
        setOs("linux");
      } else {
        setOs("unknown");
      }
    };

    detectOS();
  }, []); 

  const handleDownload = () => {
    downloadGame(os);
  };

  return (
    <Container>
      <Button variant="primary" type="submit" onClick={handleDownload}>
        {os !== "unknown" && (
          <>
            <img
              src={`path-to-icon-folder/${os}-icon.png`} // здесь должен быть путь с иконкой операционной системы
              alt={`${os} icon`}
              style={{ marginRight: "8px" }}
            />
            Скачать игру
          </>
        )}
        {os === "unknown" && "Скачать игру"}
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { downloadGame };

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsComponent);
