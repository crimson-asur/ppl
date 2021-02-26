import { combineReducers } from "redux";

import { NEW_IMAGE_UPLOAD, NEW_COMMENT } from "../actions";
import { LOGIN, LOGOUT } from "../actions/loginActions";

console.log(NEW_COMMENT);

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

//
const userLoginReducer = (state = { login: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default combineReducers({ fileUploadReducer, userLoginReducer });
