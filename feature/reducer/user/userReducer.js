import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  signUp,
  getUser,
  updateUser,
} from"../../action/user/userAction";
import { toast } from "react-toastify";

const UserReducer = createSlice({
  name: "User",
  initialState: {
    user: [],
    singleUser: {},
    loader: false,
    error: "",
    success: "",
  },
  reducers: {},
  extraReducers: {
    /* -------------------------- signin user -------------------------- */
    [signIn.pending]: (state, action) => {
      state.loader = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
    },

    [signIn.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    /* -------------------------- update user -------------------------- */
    [updateUser.pending]: (state, action) => {
      state.loader = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [updateUser.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    /* -------------------------- signup user -------------------------- */
    [signUp.pending]: (state, action) => {
      state.loader = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [signUp.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    // single userby userId
    [getUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.singleUser = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
  },
});
// export
// export const {} = UserReducer.actions;

// export default
export default UserReducer.reducer;
