import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

const App = () => {

const [mode, setMode] = useState('light');
//whether dark mode is enabled or not.

const [alert, setAlert] = useState(null);

const showAlert =(message, type)=>{
  setAlert
  ({
  msg:message,
  type:type
  })
};


const toggleMode=()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(5 18 40)';
    showAlert("Dark mode has been enabled.","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled.","success");
  }
};
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading="Enter the text to analyse" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
