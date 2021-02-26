import React, { useState } from "react";

import { connect } from "react-redux";
import UploadForm from "./UploadForm";
import store from "../../../store";
import action from "../../../actions";

const InviteUpload = (props) => {
  // console.log("Props function received");
  console.log("Props from store");
  console.log(props);
  console.log(store.getState());
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
      {isUpload ? <UploadForm /> : ""}
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

const mapStateToProps = (state) => {
  const { newUpload } = state;
  return { newUpload: newUpload };
};

export default InviteUpload;
// export default InviteUpload;
