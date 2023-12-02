import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slices/MenuSlice";
import logger from "redux-logger";

import RestaurantReducer from "./slices/RestaurantSlice";

export const store = configureStore({
  reducer: {
    menus: MenuReducer,
    restaurant: RestaurantReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
