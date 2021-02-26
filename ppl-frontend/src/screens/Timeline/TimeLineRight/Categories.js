import CategoryComponent from "../../../Components/CategorySection/CategoryComponent";

const Categories = () => {
  //  Hardcoded data, later fetch from backend
  const data = [
    {
      name: "Cats",
      imgSrc: "images/icon_01.png",
      url: "https://kids.nationalgeographic.com/animals/birds/",
    },
    {
      name: "Dogs",
      imgSrc: "images/icon_02.png",
      url: "https://kids.nationalgeographic.com/animals/birds/",
    },
    {
      name: "Birds",
      imgSrc: "images/icon_03.png",
      url: "https://kids.nationalgeographic.com/animals/birds/",
    },
    {
      name: "Rabbits",
      imgSrc: "images/icon_04.png",
      url: "https://kids.nationalgeographic.com/animals/birds/",
    },
    {
      name: "Other",
      imgSrc: "images/icon_05.png",
      url: "https://kids.nationalgeographic.com/animals/birds/",
    },
  ];
  return (
    <div className="rght_cate">
      <div className="rght_cate_hd" id="rght_cat_bg">
        Categories
      </div>
      <div className="rght_list">
        <ul>
          {data.map((object) => {
            // loop over data(array of {})
            return <CategoryComponent props={object} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
