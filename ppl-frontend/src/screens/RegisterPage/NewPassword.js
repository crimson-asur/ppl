import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import config from "../../config.json";
import ResetForm from "./ResetForm";

import history from "../History";

const VERIFY_TOKEN = config.VERIFY_TOKEN;
const RESET_PASSWORD = config.RESET_PWD;

const NewPassword = ({ match }) => {
  // States
  // const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setPassword((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      // Both passwords should match
      if (password.password === password.confirmPassword) {
        // POST call to backend to reset password
        const response = await axios.post(RESET_PASSWORD, {
          password: password.password,
          email: email,
          token: match.params.id,
        });
        if (response.data.msg === "OK") {
          alert("Your password has been reset");
          history.push("/login");
        } else {
          console.log(response.data);
          setErrorMessage(response.data.msg);
        }
      } else {
        setErrorMessage("Passwords do not match");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        // verify token exists in Database
        const response = await axios.post(VERIFY_TOKEN, {
          token: match.params.id,
        });
        console.log("response");
        console.log(response.data);
        setMessage(response.data.msg);

        // Retrieve Email related with the token
        // set Email state
        setEmail(response.data.email);
        console.log(email);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong :/");
      }
    };
    initialize();
  }, [email, match.params.id]);

  return (
    <>
      {message === "Token invalid or expired" ? (
        <div>
          <h3>{message}</h3>
          <Link to="/forgot">
            <h3>Forgot Password</h3>
          </Link>
        </div>
      ) : (
        <ResetForm handleChange={handleChange} handleSubmit={handleSubmit} />
      )}

      {errorMessage ? errorMessage : ""}
    </>
  );
};

export default NewPassword;
