import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Content = () => {
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState({});

  const toggleLogin = () => {
    setRegister((prev) => !prev);
  };
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            {register ? (
              <Register toggleFn={toggleLogin} />
            ) : (
              <Login toggleFn={toggleLogin} />
            )}
          </div>
          <div className="content_lft">
            <h1>Welcome from PPL!</h1>
            <p className="discrptn">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <img src="images/img_9.png" alt="" />{" "}
          </div>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
};

export default Content;
