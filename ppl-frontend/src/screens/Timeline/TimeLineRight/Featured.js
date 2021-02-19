import React from "react";
import Feature from "../../../Components/FeatureSection/Feature";

let featuredData = [
  { name: "Rabbits", desc: "Lorem Ipsum", imageSrc: "images/feat_img1" },
  { name: "Dogs", desc: "Lorem Ipsum", imageSrc: "images/feat_img2" },
  { name: "Rabbits", desc: "Lorem Ipsum", imageSrc: "images/feat_img3" },
];
const Featured = () => {
  return (
    <div className="rght_cate">
      <div className="rght_cate_hd" id="opn_cat_bg">
        Featured
      </div>
      {featuredData.map((item) => {
        return <Feature props={item} />;
      })}
    </div>
  );
};

export default Featured;
