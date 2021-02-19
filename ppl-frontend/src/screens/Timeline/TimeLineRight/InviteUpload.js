import React, { useState, useEffect } from "react";

import UploadForm from "./UploadForm";

const InviteUpload = (props) => {
  console.log("Props function received");

  const [isUpload, setIsUpload] = useState(false);
  const renderForm = () => {
    props.props.props((prev) => !prev);
    setIsUpload((prevValue) => !prevValue);
  };
  return (
    <div>
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#" onClick={renderForm}>
          Upload Post
        </a>
      </div>
      {isUpload ? <UploadForm props={props.props.props} /> : ""}
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="images/btn_icona.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#">Invite Friends</a>{" "}
      </div>
    </div>
  );
};

export default InviteUpload;
