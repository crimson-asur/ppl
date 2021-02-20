import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import config from "../../config.json";

const IMAGE_LIKE = config.IMAGE_POST_LIKES;

const Post = (props = { commentState: (prev) => {} }) => {
  // console.log(commentState);
  var commentState;
  if (!props.commentState) {
    commentState = () => {};
  } else commentState = props.commentState;
  console.log(props);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const initializeLikes = async () => {
    const response = await axios.post(config.IMAGE_GET_LIKES, {
      image: image.image,
    });

    setLikes(response.data.likes);
  };
  const image = props.props;
  // console.log(config);
  // console.log(image.image);

  useEffect(() => {}, [likes]);

  const handleLike = async (event) => {
    setIsLiked((prev) => {
      console.log(prev);
      return !prev;
    });
    const response = await axios.post(IMAGE_LIKE, {
      like: isLiked,
      image: image.image,
      user: localStorage.getItem("email"),
    });

    setLikes(response.data.likes);
    console.log(response);
  };

  initializeLikes();

  return (
    <div className="div_a">
      <div className="div_title">{image.caption}</div>
      <div className="btm_rgt">
        <div className="btm_arc">Cats</div>
      </div>
      <div className="div_top">
        <div className="div_top_lft">
          <img src={""} />
          {image.user}
        </div>
        <div className="div_top_rgt">
          <span className="span_date">{image.time}</span>
          <span className="span_time">11:15am</span>
        </div>
      </div>
      <div className="div_image">
        <Link to={`/timeline/${image.image}`}>
          <img src={"http://localhost:3001/images/" + image.image} alt="pet" />
        </Link>
      </div>

      <div>
        <span className="span_date">
          {isLiked ? "You've liked this post" : ""}
        </span>
      </div>

      <div className="div_btm">
        <div className="btm_list">
          <ul>
            <li>
              <a href="#">
                <span className="btn_icon">
                  <img src="/images/icon_001.png" alt="share" />
                </span>
                Share
              </a>
            </li>
            <li>
              <a href="#">
                <span className="btn_icon">
                  <img src="/images/icon_002.png" alt="share" />
                </span>
                Flag
              </a>
            </li>
            <li>
              <Link onClick={handleLike}>
                <span className="btn_icon">
                  <img src="/images/icon_003.png" alt="share" />
                </span>
                {likes} Likes
              </Link>
            </li>
            <li>
              <Link onClick={() => commentState((prev) => prev + 1)}>
                <span className="btn_icon">
                  <img src="/images/icon_004.png" alt="share" />
                </span>
                4 Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
