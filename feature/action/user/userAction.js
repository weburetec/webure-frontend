import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// user sign up
export const signUp = createAsyncThunk(
  "user/new-user-signUp",
  async (datas, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/user/signup`, datas);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// user sign in
export const signIn = createAsyncThunk(
  "user/signin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/user/signin`, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// user sign out
export const signOut = createAsyncThunk(
  "user/signOut",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/user/signout`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get single user by userId
export const getUser = createAsyncThunk(
  "user/get-single-user",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/user/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// update user by userId
export const updateUser = createAsyncThunk(
  "user/update-user",
  async ({ formData, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/v1/user/${userId}`, formData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
