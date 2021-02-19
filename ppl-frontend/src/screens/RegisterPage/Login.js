import React, { useState } from "react";
import axios from "axios";

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
    if (email && password) {
      // make backend call;
      console.log(email);
      console.log(password);

      try {
        const response = await axios.post("http://localhost:3001/home/login", {
          email,
          password,
        });
        console.log(response);
        setMessage(response.data);
        localStorage.setItem("email", email);
      } catch (error) {
        console.error(error);
      }
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
          <a href>Forgot Password</a>
        </li>
      </ul>
      <h3>{message}</h3>
      <div className="addtnal_acnt">
        I do not have any account yet.
        <a onClick={props.toggleFn} href>
          Create My Account Now !
        </a>
      </div>
    </div>
  );
};

export default Login;
