import React, { useState } from "react";
// import {ReDirect} from "react-router-dom"

import TimeLineLeft from "./TimeLineLeft/TimeLineLeft";
import TimeLineRight from "./TimeLineRight/TimeLineRight";

import history from "../History";

const TimeLineCompiled = () => {
  // if user is not found in local storage
  // redirect user to login page
  if (!localStorage.getItem("email")) {
    history.push("/login");
  }
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="container">
      <div className="content">
        <div className="content_rgt">
          {/* Right Components go here*/}
          <TimeLineRight props={setRefresh} />
        </div>
        <div className="content_lft">
          <TimeLineLeft props={refresh} />
        </div>
      </div>
    </div>
  );
};

export default TimeLineCompiled;
