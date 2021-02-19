import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  //   console.logz;
  //   console.log(props);

  const image = props.props;
  // console.log(props);
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
              <a href="#">
                <span className="btn_icon">
                  <img src="/images/icon_003.png" alt="share" />
                </span>
                0 Likes
              </a>
            </li>
            <li>
              <a href="#">
                <span className="btn_icon">
                  <img src="/images/icon_004.png" alt="share" />
                </span>
                4 Comments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
