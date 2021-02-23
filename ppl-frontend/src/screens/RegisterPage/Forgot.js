import React, { useState } from "react";
import axios from "axios";

import config from "../../config.json";
const FORGOT_PASSWORD_SEND_EMAIL = config.FORGOT_PWD;

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setEmail(() => event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(FORGOT_PASSWORD_SEND_EMAIL, {
        email: email,
      });
      console.log(response);
      setMessage(response.data.msg);
      // history.push("/");
    } catch (error) {}
  };

  return (
    <div className="register_sec">
      <h1>Forgot Password</h1>
      <ul>
        <li>
          <span>Enter E-mail ID</span>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="User@gmail.com"
          />
        </li>
        <li>
          <input onClick={handleSubmit} type="submit" value="Submit" />
        </li>
      </ul>
      <h3>{message ? message : ""}</h3>
    </div>
  );
};

export default Forgot;
