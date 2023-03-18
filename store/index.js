import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/reducer/user/userReducer";
import blogReducer from "../feature/reducer/blog/blogReducer";
import vacancyReducer from "../feature/reducer/vacancy/vacanciesReducer";

export const store = configureStore({
  reducer: {
    // reducer
    userReducer,
    blogReducer,
    vacancyReducer,
  },
});
