import React from "react";

const Feature = (props) => {
  return (
    <div className="feat_sec">
      <div className="feat_sec_img">
        <img src="images/feat_img3.png" alt="image" />
      </div>
      <div className="feat_txt">{props.desc}</div>
      <div className="btm_rgt">
        <div className="btm_arc">{props.name}</div>
      </div>
    </div>
  );
};

export default Feature;
