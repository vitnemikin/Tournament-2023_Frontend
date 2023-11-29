import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { downloadGame } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import Draggable from 'react-draggable';
import Wrapper from "./Wrapper";
import {
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { Window, WindowHeader, WindowContent, Toolbar } from "react95";

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

  const getOsIcon = () => {
    switch (os) {
      case "windows":
        return <FontAwesomeIcon icon={faWindows} />;
      case "macos":
        return <FontAwesomeIcon icon={faApple} />;
      case "linux":
        return <FontAwesomeIcon icon={faLinux} />;
      default:
        return null;
    }
  };

  const handleDownload = () => {
    downloadGame(os);
  };

  return (
    <Wrapper>
    <Draggable>
      <Window resizable className="window" style={{fontFamily: ms_sans_serif, width: '25%', height: '150px'}}>
        <WindowHeader className="window-title">
          <span>Скачать игру</span>
          <button style={{ width: "30px",
    height: "32px"}}>
            <span className="close-icon" />
          </button>
        </WindowHeader>
        <Toolbar>
          <button variant="menu" size="sm">
            File
          </button>
          <button variant="menu" size="sm">
            Edit
          </button>
          <button variant="menu" size="sm" disabled>
            Save
          </button>
        </Toolbar>
        <WindowContent>
          <Container>
            <button variant="primary" type="button" onClick={handleDownload}>
              {os !== "unknown" && (
                <>
                  {getOsIcon()}
                  Скачать игру
                </>
              )}
              {os === "unknown" && " Скачать игру"}
            </button>
          </Container>
        </WindowContent>
      </Window>
      </Draggable>
    </Wrapper>
    
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { downloadGame };

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsComponent);
