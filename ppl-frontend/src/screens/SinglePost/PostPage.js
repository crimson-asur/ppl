import React, { useState, useEffect } from "react";
import axios from "axios";

import Featured from "../../Components/FeatureSection/Feature";
import Categories from "../../Components/CategorySection/CategoryComponent";
import Post from "../../Components/Post/";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

import config from "../../config.json";

const data = [
  { name: "Cats", imgSrc: "/images/icon_01.png" },
  { name: "Dogs", imgSrc: "/images/icon_02.png" },
  { name: "Birds", imgSrc: "/images/icon_03.png" },
  { name: "Rabbits", imgSrc: "/images/icon_04.png" },
  { name: "Other", imgSrc: "/images/icon_05.png" },
];

const PostPage = ({ match }) => {
  // state to pass as prop to child components-CreateComment.js and Comment.js
  // commentState  will be passed to CreateComponent.js which will change state when new comment is created
  // change in state will rerender Comment component
  const [commentState, setCommentState] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  console.log("PostPage rendered");
  console.log(commentsCount);
  useEffect(() => {
    fetchComments();
  }, [commentState]);
  // Function to retrieve comments from DB
  const fetchComments = async () => {
    const data = {
      image: match.params.id,
    };
    try {
      const response = await axios.post(config.IMAGE_GET_COMMENT, data);
      console.log("comments are");
      let coms = response.data.comments;
      console.log(response.data.comments);

      setCommentsCount(coms.length);
      setComments(coms.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("Params");
  // console.log(match.params.id);
  // fetchComments();
  return (
    <div className="container">
      <div className="content">
        <div className="content_rgt">
          <div className="rght_list">
            <ul>
              {data.map((object) => {
                return <Categories props={object} />;
              })}
            </ul>
          </div>

          <div className="rght_cate">
            <div className="rght_cate_hd" id="opn_cat_bg">
              Featured
            </div>
            {featuredData.map((item) => {
              return <Featured props={item} />;
            })}
          </div>
        </div>
        <div className="content_lft">
          <div className="contnt_2">
            <Post
              commentState={setCommentState}
              props={{
                image: match.params.id,
                user: "mikasa@scouts.com",
                time: "2021-02-18T11:37:12.631Z",
                caption: "ackerman",
                commentCount: commentsCount,
              }}
            />
          </div>

          <div className="contnt_3">
            <ul>
              <li>
                <CreateComment
                  changeCommentState={setCommentState}
                  commentState={commentState}
                  image={match.params.id}
                />
              </li>

              {comments.map((item) => {
                return <Comment commentState={commentState} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

let featuredData = [
  { name: "Rabbits", desc: "Lorem Ipsum", imageSrc: "/images/feat_img1" },
  { name: "Dogs", desc: "Lorem Ipsum", imageSrc: "/images/feat_img2" },
  { name: "Rabbits", desc: "Lorem Ipsum", imageSrc: "/images/feat_img3" },
];
