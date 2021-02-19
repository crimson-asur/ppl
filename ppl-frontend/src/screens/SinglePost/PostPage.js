import React from "react";
import axios from "axios";

import Featured from "../../Components/FeatureSection/Feature";
import Categories from "../../Components/CategorySection/CategoryComponent";
import Post from "../../Components/Post/";
import Comment from "./Comment";

const data = [
  { name: "Cats", imgSrc: "/images/icon_01.png" },
  { name: "Dogs", imgSrc: "/images/icon_02.png" },
  { name: "Birds", imgSrc: "/images/icon_03.png" },
  { name: "Rabbits", imgSrc: "/images/icon_04.png" },
  { name: "Other", imgSrc: "/images/icon_05.png" },
];

const PostPage = ({ match }) => {
  console.log("Params");
  console.log(match.params.id);
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
              props={{
                image: match.params.id,
                user: "mikasa@scouts.com",
                time: "2021-02-18T11:37:12.631Z",
                caption: "ackerman",
              }}
            />
          </div>

          <div className="contnt_3">
            <ul>
              <Comment />
              <Comment />
              <Comment />
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
