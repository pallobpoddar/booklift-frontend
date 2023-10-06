import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import bookReducer from "./reducers/bookReducer";

const store = createStore(
	bookReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
