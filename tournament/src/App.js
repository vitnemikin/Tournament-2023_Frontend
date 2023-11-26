import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from "./components/AboutComponent/AboutComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import DownloadsComponent from "./components/DownloadsComponent/DownloadsComponent";
import NavigatorComponent from "./components/NavigatorComponent/NavigatorComponent";
const App = () => {
  return (
    <Router basename="/">
      <NavigatorComponent />
      <Routes>
        {/* <Route path="/" element={<MainComponent />} /> */}
        <Route path="/profile" element={<ProfileComponent />}></Route>
        <Route path="/aboutus" element={<AboutComponent />} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/downloads" element={<DownloadsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
