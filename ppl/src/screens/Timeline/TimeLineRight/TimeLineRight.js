import TimeLineCompiled from "../TimeLineCompiled";
import InviteUpload from "./InviteUpload";
import Categories from "./Categories";
import Featured from "./Featured";
const TimeLineRight = (props) => {
  return (
    <>
      <InviteUpload props={props} />
      <Categories />
      <Featured />
    </>
  );
};

export default TimeLineRight;
