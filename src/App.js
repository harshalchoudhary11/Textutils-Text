import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Been enabled", "success")
      document.title = "Textutlis , Dark mode enable";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("light Mode Has Been enabled", "success")
      document.title = "Textutlis , Light mode enable";
    }
  }
  return (
    <>  
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route  exact path="/home" className='container my-3' element={<TextFrom heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />} /> */}
          {/* <Route  exact path="/about" className='container my-3' element={<About showAlert={showAlert} />} /> */}
          <TextFrom heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
