import CategoryComponent from "../../../Components/CategorySection/CategoryComponent";

const Categories = () => {
  const data = [
    { name: "Cats", imgSrc: "images/icon_01.png" },
    { name: "Dogs", imgSrc: "images/icon_02.png" },
    { name: "Birds", imgSrc: "images/icon_03.png" },
    { name: "Rabbits", imgSrc: "images/icon_04.png" },
    { name: "Other", imgSrc: "images/icon_05.png" },
  ];
  return (
    <div className="rght_cate">
      <div className="rght_cate_hd" id="rght_cat_bg">
        Categories
      </div>
      <div className="rght_list">
        <ul>
          {data.map((object) => {
            return <CategoryComponent props={object} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
