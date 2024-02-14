// Import State
import { useState } from "react";

import { useValidate } from "./useValidate";

import { useAuth } from "./useAuthProvider";

import { useNavigate } from "react-router-dom";



export function useLogin() {
  //Use State for the form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Setup Form Errors State
  const [formErrors, validateForm] = useValidate(loginData);

   //Use the Auth Context
   const auth = useAuth();

   //use Navigate
   const navigate = useNavigate();
  
  
  //Handle the form data
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

 

  //Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      await auth.loginAction(loginData)
      .then (() => {
        navigate("/dashboard");
      })
    }
  };




  //Return the state and the event handlers
  return { loginData, formErrors, handleChange, handleSubmit};
}
