import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import config from "../../config.json";

const CreateComment = (props) => {
  const searchInput = useRef(null);
  const [inputFieldState, setInputFieldState] = useState("");

  console.log(props.commentState);

  const handleChange = (event) => {
    setInputFieldState(() => event.target.value);
  };

  const handleSubmit = async (event) => {
    if (!inputFieldState) {
      alert("Comment can be empty");
    } else {
      console.log(props.image);
      const data = {
        comment: inputFieldState,
        image: props.image,
        username: localStorage.getItem("email"),
      };
      try {
        const response = await axios.post(config.IMAGE_POST_COMMENT, data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, [props.commentState]);
  return (
    <div className="cmnt_div1">
      <input
        onChange={handleChange}
        ref={searchInput}
        type="text"
        placeholder="enter some comment"
        className="cmnt_bx1"
      />
      <input
        type="submit"
        onClick={handleSubmit}
        className="sub_bttn1"
        defaultValue="Submit Comment"
      />
    </div>
  );
};

export default CreateComment;
