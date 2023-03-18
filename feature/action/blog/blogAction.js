import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL BLOGS
export const getBlogs = createAsyncThunk(
  "blog/get-all-blogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/blogs`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// DELETE BLOG
export const deleteBlogById = createAsyncThunk(
  "blog/deleteBlogById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/v1/blog/${id}`);

      dispatch(getBlogs());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// CREATE/POST BLOG
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/v1/create-new-blog`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET SINGLE BLOGS
export const getBlog = createAsyncThunk(
  "blog/get-single-blog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/blog/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET ACTIVE BLOGS
export const getActiveBlogs = createAsyncThunk(
  "blog/get-active-blogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/active-blogs`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// UPDATE/PATCH BLOG
export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/v1/blog/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// UPDATE/PATCH BLOG STATUS
export const updateBlogStatus = createAsyncThunk(
  "blog/updateBlogStatus",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(`/v1/update/status/${id}`);
      dispatch(getBlogs());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
