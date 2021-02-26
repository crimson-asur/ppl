const NEW_IMAGE_UPLOAD = "NEW_IMAGE_UPLOAD";
const NEW_COMMENT = "NEW_COMMENT";

const imageUploadAction = (newImageReceived) => {
  // change state when an image is uploaded
  console.log("image upload action called");
  return {
    type: NEW_IMAGE_UPLOAD,
  };
};

const newCommentAction = () => {
  console.log("You have a new comment");
  return {
    type: NEW_COMMENT,
  };
};
export {
  imageUploadAction as default,
  newCommentAction,
  NEW_IMAGE_UPLOAD,
  NEW_COMMENT,
};
