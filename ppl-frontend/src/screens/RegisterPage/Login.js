import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import config from "../../config.json";
import history from "../History";

const LOGIN_ENDPOINT = config.LOGIN;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  //   const handleChange = (event) => {
  //       setCredentials((prevCreds) => {
  //           return
  //       })
  //   };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //  if email and password are not ""
    if (email && password) {
      // make backend call;
      console.log(email);
      console.log(password);

      try {
        const response = await axios.post(LOGIN_ENDPOINT, {
          email,
          password,
        });
        console.log(response);

        setMessage(response.data);
        //"You are logged in"
        if (response.data === "You are logged in") {
          localStorage.setItem("email", email);
          history.push("/timeline");
        }
      } catch (error) {
        console.error(error);
      }
      // set email and password states back to ""
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="login_sec">
      <h1>Log In</h1>
      <ul>
        <li>
          <span>Email-ID</span>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </li>
        <li>
          <span>Password</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
        <li>
          <input type="checkbox" name="remember" />
          Remember Me
        </li>
        <li>
          <input
            type="submit"
            name="subm"
            onClick={handleSubmit}
            defaultValue="Log In"
            value="Log In"
          />
          <Link to="/forgot">Forgot Password</Link>
        </li>
      </ul>
      <h3>{message}</h3>
      <div className="addtnal_acnt">
        I do not have any account yet.
        <Link to="/">Create My Account Now !</Link>
      </div>
    </div>
  );
};

export default Login;
