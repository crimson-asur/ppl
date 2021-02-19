import React from "react";

// Component for Featured Section
const Feature = (props) => {
  // console.log("received props");
  // console.log(props.props.imageSrc);
  // console.log("___________________");
  return (
    <div className="feat_sec">
      <div className="feat_sec_img">
        <img src={props.props.imageSrc + ".png"} alt="image" />
      </div>
      <div className="feat_txt">{props.props.desc}</div>
      <div className="btm_rgt">
        <div className="btm_arc">{props.props.name}</div>
      </div>
    </div>
  );
};

export default Feature;
