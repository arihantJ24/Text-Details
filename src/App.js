// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./MyComponents/Navbar";
import TextArea from "./MyComponents/TextArea";
import About from "./MyComponents/About";
import Alert from "./MyComponents/Alert";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); // it says whether dark mode is enabled or light mode is enabled
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(57 58 62)";
      showAlert("dark mode is enabled", "success");
      // document.title = 'Text-Detail DarkMode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      // document.title = 'Text-Detail LightMode'
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-details"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar  aboutText="About us" /> */}
        {/* <Navbar /> */}
        <Alert alert={alert} />

        <div className="container my-3 ">
          <Routes>
            <Route path="/about" element={<About mode = {mode} />} />
            <Route
              path="/"
              element={
                <TextArea
                  showAlert={showAlert}
                  heading="Text-Details : Word Conter , Character Counter "
                  mode={mode}
                />
              }
            />
          </Routes>

          {/* <TextArea showAlert={showAlert} heading="Enter the text to analyse " mode={mode} /> */}
        </div>
      </Router>
     < Footer/>
    </>
  );
}

export default App;
