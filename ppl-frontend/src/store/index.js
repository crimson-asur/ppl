import { createStore } from "redux";

// actions
import rootReducer from "../reducers";

const store = createStore(rootReducer);

store.dispatch({ type: "NEW_IMAGE_UPLOAD" });
export default store;
