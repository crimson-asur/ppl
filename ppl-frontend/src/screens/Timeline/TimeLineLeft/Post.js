import React, { useEffect, useState } from "react";
import axios from "axios";

import SinglePost from "../../../Components/Post/";
const Post = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/timeline/showuploads", {
        user: localStorage.getItem("email"),
      })
      .then((result) => {
        // console.log(result);
        setImages(result.data);
      });
  }, [props.props.props]);
  // console.log("Memory leak");
  // console.log(images);
  return (
    <div className="contnt_2">
      {images.map((image) => {
        return <SinglePost props={image} />;
      })}
    </div>
  );

  // return (
  //   <div className="contnt_2">
  //     <div className="div_a">
  //       <div className="div_title">
  //         User Interface PSD Source files Web Designing for web
  //       </div>
  //       <div className="btm_rgt">
  //         <div className="btm_arc">Cats</div>
  //       </div>
  //       <div className="div_top">
  //         <div className="div_top_lft">
  //           <img src={""} />
  //           Steave Waugh
  //         </div>
  //         <div className="div_top_rgt">
  //           <span className="span_date">02 Jan 2014</span>
  //           <span className="span_time">11:15am</span>
  //         </div>
  //       </div>
  //       <div className="div_image">
  //         <img
  //           src={"./backend/public/images/myImage-1613551328325.jpeg"}
  //           alt="pet"
  //         />
  //       </div>
  //       <div className="div_btm">
  //         <div className="btm_list">
  //           <ul>
  //             <li>
  //               <a href="#">
  //                 <span className="btn_icon">
  //                   <img src="images/icon_001.png" alt="share" />
  //                 </span>
  //                 Share
  //               </a>
  //             </li>
  //             <li>
  //               <a href="#">
  //                 <span className="btn_icon">
  //                   <img src="images/icon_002.png" alt="share" />
  //                 </span>
  //                 Flag
  //               </a>
  //             </li>
  //             <li>
  //               <a href="#">
  //                 <span className="btn_icon">
  //                   <img src="images/icon_003.png" alt="share" />
  //                 </span>
  //                 0 Likes
  //               </a>
  //             </li>
  //             <li>
  //               <a href="#">
  //                 <span className="btn_icon">
  //                   <img src="images/icon_004.png" alt="share" />
  //                 </span>
  //                 4 Comments
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default Post;
