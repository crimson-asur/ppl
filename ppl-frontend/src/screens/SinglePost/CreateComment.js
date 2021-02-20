import React, { useEffect, useRef } from "react";

const CreateComment = (props) => {
  const searchInput = useRef(null);

  console.log(props.commentState);
  useEffect(() => {
    searchInput.current.focus();
  }, [props.commentState]);
  return (
    <div className="cmnt_div1">
      <input
        ref={searchInput}
        type="text"
        placeholder="enter some comment"
        className="cmnt_bx1"
      />
      <input
        type="submit"
        className="sub_bttn1"
        defaultValue="Submit Comment"
      />
    </div>
  );
};

export default CreateComment;
