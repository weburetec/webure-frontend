import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createBlog,
  deleteBlogById,
  getActiveBlogs,
  getBlog,
  getBlogs,
  updateBlog,
  updateBlogStatus,
} from "../../action/blog/blogAction";

const BlogReducer = createSlice({
  name: "Blog",
  initialState: {
    blogs: [],
    blog: {},
    blogContainer: [],
    activeBlogs: [],
    loader: false,
    error: "",
    success: "",
  },
  reducers: {
    filterBlog: (state, action) => {
      state.blogs.data = state.blogContainer.filter(
        (u) =>
          u.title.toLowerCase().includes(action.payload) ||
          u.title.toUpperCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    // single blogs
    [getBlog.pending]: (state, action) => {
      state.loader = true;
    },
    [getBlog.fulfilled]: (state, action) => {
      state.loader = false;
      state.blog = action.payload;
    },
    [getBlog.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // all blogs
    [getBlogs.pending]: (state, action) => {
      state.loader = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.loader = false;
      state.blogs = action.payload;
      state.blogContainer = action.payload.data;
    },
    [getBlogs.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // all blogs
    [getActiveBlogs.pending]: (state, action) => {
      state.loader = true;
    },
    [getActiveBlogs.fulfilled]: (state, action) => {
      state.loader = false;
      state.activeBlogs = action.payload;
    },
    [getActiveBlogs.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },

    /* -------------------------- update user -------------------------- */
    [updateBlog.pending]: (state, action) => {
      state.loader = true;
    },
    [updateBlog.fulfilled]: (state, action) => {
      state.loader = false;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [updateBlog.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    /* --------------------------- update blog status --------------------------- */
    [updateBlogStatus.pending]: (state, action) => {
      state.loader = true;
    },
    [updateBlogStatus.fulfilled]: (state, action) => {
      state.loader = false;
      state.blogs = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [updateBlogStatus.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },

    // delete Blob by ID
    [deleteBlogById.pending]: (state, action) => {
      state.loader = true;
    },
    [deleteBlogById.fulfilled]: (state, action) => {
      state.loader = false;
      state.blogs = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [deleteBlogById.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    // create a new blog
    [createBlog.pending]: (state, action) => {
      state.loader = true;
    },
    [createBlog.fulfilled]: (state, action) => {
      state.loader = false;
      state.blogs = action.payload;
      state.success = action.payload.message;
      toast.success(action.payload.message);
    },
    [createBlog.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
  },
});

// export
export const { filterBlog } = BlogReducer.actions;

// export default
export default BlogReducer.reducer;
