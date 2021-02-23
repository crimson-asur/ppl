import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../config.json";

const SIGNUP_ENDPOINT = config.SIGNUP;

const Register = (props) => {
  console.log(props.toggleFn);
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    fname: "",
    lname: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // Append form data to credentials
    event.preventDefault();
    if (
      !credentials.username ||
      !credentials.password ||
      !credentials.email ||
      !credentials.fname ||
      !credentials.lname
    ) {
      setMessage("All fields are required");
    } else {
      // If data is valid make axios post call
      axios
        .post(SIGNUP_ENDPOINT, credentials)
        .then((res) => {
          console.log(res);
          setMessage(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    console.log(credentials);
  };
  return (
    <div className="register_sec">
      <h1>Create An Account</h1>
      <ul>
        <li>
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <span>Password</span>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <span>Email</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <span>First Name</span>
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </li>
        <li>
          <span>Last Name</span>
          <input
            type="text"
            name="lname"
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </li>
        <li>
          <input required type="checkbox" name="remember" />I agree to Term
          &amp; Conditions
        </li>
        <li>
          <input
            type="submit"
            defaultValue="Register"
            placeholder="Submit"
            value="Submit"
            onClick={handleSubmit}
          />
        </li>
      </ul>
      <h4>{message}</h4>
      <div className="addtnal_acnt">
        I already have an account.
        <Link to="/login">Login My Account !</Link>
      </div>
    </div>
  );
};

export default Register;
