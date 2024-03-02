// Code: useValidate.jsx
import { useState } from "react";

export function useValidate(data) {
  // Setup Form Errors State
  const [formErrors, setErrors] = useState({});

  // Validate Form Data
  const validateForm = () => {
    const formErrors = {};


    //Validate any required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "password",
      "confirmPassword",
    ];
    requiredFields.forEach((field) => {
      if (field in data && !data[field]) {
        formErrors[field] = `${field} is required`;
      }
    });

    //Validate Email
    if ('email' in data && !/\S+@\S+\.\S+/.test(data.email) && data.email !== "") {
      formErrors.email = "Email address is invalid";
    }

    //Validate Password
    if ('password' in data && data.password.length < 6 && data.password !== "") {
      formErrors.password = "Password must be at least 6 characters";
    } else {
      // If the password doesnt contain a number, a letter and a special character
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(
          data.password
        )
      ) {
        formErrors.password =
          "Password must contain at least one uppercase letter, one lowercase letter, and one number";
      }
    }

    //Validate Confirm Password
    if ('confirmPassword' in data && data.confirmPassword !== data.password && data.confirmPassword !== "") {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors); // Set the form errors state

    // If the form is valid return true
    if (Object.keys(formErrors).length === 0) {
      return true;
    }
  };

  return [formErrors, validateForm]; // Return the state and the event handlers
}
