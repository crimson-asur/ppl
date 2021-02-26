const NEW_IMAGE_UPLOAD = "NEW_IMAGE_UPLOAD";

const imageUploadAction = (newImageReceived) => {
  // change state when an image is uploaded
  console.log("image upload action called");
  return {
    type: NEW_IMAGE_UPLOAD,
  };
};

export default imageUploadAction;
