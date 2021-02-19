import React from "react";
import TimeLineLeft from "./TimeLineLeft/TimeLineLeft";
import TimeLineRight from "./TimeLineRight/TimeLineRight";
const TimeLineCompiled = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content_rgt">
          {/* Right Components go here*/}
          <TimeLineRight />
        </div>
        <div className="content_lft">
          <TimeLineLeft />
        </div>
      </div>
    </div>
  );
};

export default TimeLineCompiled;
