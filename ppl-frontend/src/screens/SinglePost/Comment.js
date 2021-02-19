import React, { useState } from "react";

const Comment = () => {
  return (
    <li>
      <div className="list_image">
        <div className="image_sec">
          <img src="/images/post_img.png" />
        </div>
        <div className="image_name">Bharat</div>
      </div>
      <div className="list_info">
        This is an example of a comment. You can create as many comments like
        this one or sub comments as you like and manage all of your content
        inside your Account.
      </div>
      <input type="button" defaultValue="Reply" className="orng_btn" />
    </li>
  );
};

export default Comment;
