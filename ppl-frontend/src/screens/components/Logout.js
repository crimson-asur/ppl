import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";

import store from "../../store";
import history from "../History";

const Logout = (props) => {
  const [shouldRender, setShouldRender] = useState(false);

  //   console.log("logout button rendered");
  //   console.log(props);

  useEffect(() => {
    // console.log("useEffect at Logout");
    if (localStorage.getItem("email")) {
      setShouldRender(true);
    } else {
      setShouldRender(false);
    }
  }, [props.login]);
  return (
    <>
      {shouldRender ? (
        <Router>
          <Link
            onClick={() => {
              localStorage.removeItem("email");
              store.dispatch({ type: "LOGOUT" });
              history.push("/login");
            }}
          >
            Logout
          </Link>
        </Router>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log("map state to props");
  //   console.log(state);
  const { userLoginReducer } = state;
  return {
    login: userLoginReducer.login,
  };
};

export default connect(mapStateToProps)(Logout);
