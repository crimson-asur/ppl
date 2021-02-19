import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Jumbotron from "./Jumbotron";
import Post from "./Post";

const TimeLineLeft = (props) => {
  return (
    <>
      <Jumbotron />
      <Post props={props} />
    </>
  );
};
export default TimeLineLeft;
