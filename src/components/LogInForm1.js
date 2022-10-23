import React from "react";
import logo from "../assets/logo.png";
import "../App.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const LogInForm1 = (props) => {

  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      navigate('/pagina1');
      props.parentCallbackLogIn(isSubmitted)
    }
  },[isSubmitted, navigate, props])


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    }

    else if (!e.target.password.value) {
      alert("Password is required");
    }

    else if (e.target.email.value === "me@example.com" && e.target.password.value === "123456"){
      // activates use Effect
      setIsSubmitted(true)
      
      /* instead of using this
      navigate ("/pagina1")
      props.parentCallbackLogIn(isSubmitted)*/

      e.target.email.value = "";
      e.target.password.value = "";
    } 
    
    else {
      alert("Wrong email or password combination");
    }
  };


  const handleClick = e => {
    e.preventDefault();
    alert("A page you will have to create");
  };


  //   src={process.env.PUBLIC_URL+"logoPublic.png"} 
  return(
      <div className="App">
        <img src={logo} className="logo" alt="Business view - Reports" />
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTRAR</button>
        </form>
        <button className="secondary" onClick={handleClick}>
          Criar uma nova conta
        </button>
      </div>
    );
}


export default LogInForm1 ;