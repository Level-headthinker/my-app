import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router} from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  // const removeBodyClasses=()=>{
  //     document.body.classList.remove("bg-primary");
  //     document.body.classList.remove("bg-success");
  //     document.body.classList.remove("bg-danger");
  //     document.body.classList.remove("bg-info");

  // }
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181d32";
      showAlert("Darkmode has been enable", "success");
      document.title = "TextUtils-DarkMode";
      // setInterval(() => {
      //   document.title=("TextUtils is an amazing app")
      // }, 2000);
      // setInterval(() => {
      //   document.title=("Install Texutils app");
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("lightmode has been enable", "success");
      document.title = "TextUtils-lightmode";
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar Title="TextUtils" /> */}
     {/* <Router> */}
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="App">
      <TextForm
          showalert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          />
      {/* <Routes>
        <Route exact path="/" element={  <TextForm
          showalert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          /> } />
        <Route exact path="about" element={ <About/> } />
      </Routes> */}
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
