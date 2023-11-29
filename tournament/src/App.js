import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import DownloadsComponent from "./components/DownloadsComponent/DownloadsComponent";
import NavigatorComponent from "./components/NavigatorComponent/NavigatorComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import './styles.scss';

const App = () => {
  return (
    <Router>
    <div className="page-wrapper">
         <NavigatorComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} ></Route>
        <Route path="/profile" element={<ProfileComponent />}></Route>
        <Route path="/aboutus" element={<AboutComponent />} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/downloads" element={<DownloadsComponent />} />
      </Routes>
      <FooterComponent />
    </div>

    </Router>
  );
};

export default App;
