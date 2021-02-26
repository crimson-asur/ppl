import NEW_IMAGE_UPLOAD from "../actions/imageUploadActions";

const defaultState = {
  newUpload: 0,
};
// Reducer for file upload state change
const fileUploadReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_IMAGE_UPLOAD:
      return {
        ...state,
        newUpload: state.newUpload + 1,
      };
    default:
      return state;
  }
};

export default fileUploadReducer;
