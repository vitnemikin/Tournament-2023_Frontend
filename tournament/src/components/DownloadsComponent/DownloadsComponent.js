import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { downloadGame } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import Draggable from 'react-draggable';
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import {
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { Window, WindowHeader, WindowContent, Toolbar } from "react95";

const DownloadsComponent = ({ downloadGame }) => {
  const { t } = useTranslation();
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
    <Wrapper style={{height: "1000px"}}>
    <Draggable>
      <Window resizable id="clsbtn" className="window" style={{fontFamily: ms_sans_serif, width: '25%', height: '150px'}}>
        <WindowHeader className="window-title">
          <span>{t("downloads_component.download_game")}</span>
          <button onClick={() => {
            document.querySelector('#clsbtn').classList.add('closed');
          }}style={{ width: "30px",
    height: "32px"}}>
            <span className="close-icon" />
          </button>
        </WindowHeader>
        <Toolbar>
          <button variant="menu" size="sm">
          {t("downloads_component.file")}
          </button>
          <button variant="menu" size="sm">
          {t("downloads_component.edit")}
          </button>
          <button variant="menu" size="sm" disabled>
          {t("downloads_component.save")}
          </button>
        </Toolbar>
        <WindowContent>
          <Container>
            <button variant="primary" type="button" onClick={handleDownload}>
              {os !== "unknown" && (
                <>
                  {getOsIcon()}
                  {t("downloads_component.download_game")}
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
