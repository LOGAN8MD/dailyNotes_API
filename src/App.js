
import './App.css';
import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  function showAlert(message,type){
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
   
  }

  function toggleMode(){
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#0b2a28';
      showAlert("Dark mode Enable","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("White mode Enable","success")
    }
  }


  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} mode={mode} />} />
              <Route exact path='/about' element={<About mode={mode} />} />
              <Route exact path="/login" element={ <Login showAlert={showAlert} mode={mode} />} />
              <Route exact path="/signup" element={ <Signup showAlert={showAlert} mode={mode} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
