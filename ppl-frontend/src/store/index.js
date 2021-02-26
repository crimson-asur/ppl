import { createStore } from "redux";

// actions
import fileUploadReducer from "../reducers";

const store = createStore(fileUploadReducer);

store.dispatch({ type: "NEW_IMAGE_UPLOAD" });
export default store;
