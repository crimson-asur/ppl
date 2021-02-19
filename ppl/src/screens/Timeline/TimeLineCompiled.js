import React, { useState } from "react";
import TimeLineLeft from "./TimeLineLeft/TimeLineLeft";
import TimeLineRight from "./TimeLineRight/TimeLineRight";
const TimeLineCompiled = () => {
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
