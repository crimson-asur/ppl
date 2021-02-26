import InviteUpload from "./InviteUpload";
import Categories from "./Categories";
import Featured from "./Featured";
const TimeLineRight = (props) => {
  return (
    <>
      <InviteUpload timeLineRightRefresh={props.timeLineRightRefresh} />
      <Categories />
      <Featured />
    </>
  );
};

export default TimeLineRight;
