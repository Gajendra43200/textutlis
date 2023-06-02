
import React from 'react';
import { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
//nginx  for hosting,deplyoment reactapp 

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom';



 function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
    
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Is Enable", "success");
      setInterval(() => {
        document.title = 'TextUtils - Dark Mode';
      }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - download  Mode';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode Is Enable", "success");
      document.title = 'TextUtils - light Mode';
    }
  }
  return (
    <>
   
   
    {/* <Navbar/> */}
    <Router>
   
    <Navbar title="TexTutList"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading='Enter Here Your Title' mode={mode} /> */}
{/* NEW VERSION  */}
    <Routes> 
          <Route  path="/" element={ <TextForm showAlert={showAlert} heading='TextTutlis - Word Counter, Remove Extra Space' mode={mode} />} />
            
          <Route  path="/about" element={<About mode={mode} />} />
     </Routes>

{/* Old version me ye use hota tha */}
    {/* <switch>
          <Routes exact path="/about">
            <About />
          </Routes>
         
          <Routes path="/">
            <TextForm showAlert={showAlert} heading='enter here your title' mode={mode} />
          </Routes>
     </switch> */}
    
    </div>
    </Router>
    </>
   
  );
}

export default App ;
