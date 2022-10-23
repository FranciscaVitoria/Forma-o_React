import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Pagina1 from './components/Pagina1';
import LogInForm1 from "./components/LogInForm1";


function App() {

    // Set state to evaluate if login form is submitted or not 
    const [state, setState] = useState(Boolean)
  
    // Get data from login component (see if login form is submitted or not)
    const handleLogIn = (logInData) =>{
        setState(logInData)
    }

     // Get data from page1 component (see if login form is submitted or not)
     const  handleLogOut = (logOutData) =>{
        setState(logOutData)
    }

    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path='/'  element={<LogInForm1  parentCallbackLogIn = {handleLogIn}/>}  />
                    <Route path='/pagina1' element={<Pagina1 submit={state} parentCallbackLogOut = {handleLogOut}/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;







