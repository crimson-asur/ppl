import React from "react";

const CategoryComponent = (props) => {
  // console.log("Props at category component");
  // console.log(props);
  return (
    <li>
      <a href={props.props.url}>
        <span className="list_icon">
          <img src={props.props.imgSrc} alt="up" />
        </span>
        {props.props.name}
      </a>
    </li>
  );
};

export default CategoryComponent;
