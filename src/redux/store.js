import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
