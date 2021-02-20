import React, { useState } from "react";

const Comment = (props) => {
  return (
    <li>
      <div className="list_image">
        <div className="image_sec">
          <img src="/images/post_img.png" />
        </div>
        <div className="image_name">{props.item.username}</div>
      </div>
      <div className="list_info">{props.item.comment}</div>
      <input type="button" defaultValue="Reply" className="orng_btn" />
    </li>
  );
};

export default Comment;
