import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HtmlParser from "react-html-parser";
import moment from "moment";

import { getBlog } from "../../../feature/action/blog/blogAction";
import axios from "axios";
import ImageModal from "../../../controls/modalImage";

const SingleBlog = () => {
  const { blog, loader } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  // useEffect
  useEffect(() => {
    dispatch(getBlog(id));
  }, [id]);

  return (
    <div className="container">
    <div className="bg-gray-50 p-2 lg:p-4 rounded-md">
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <ImageModal
            src={`${axios.defaults.baseURL}/blog/${blog.picture}`}
            className="h-96 w-full rounded-md"
          />
        </div>
        <div>{HtmlParser(blog.shortDescription)}</div>
      </div>
      <div className="mt-2 mb-2">{HtmlParser(blog.longDescription)}</div>

      <div>
        <p className="text-lg md:text-2xl font-semibold tracking-wider font-Montserrat border-b-2 w-11 md:w-14 border-green-300">
          Stats
        </p>
        <div className="flex flex-nowrap gap-4 mt-3">
          <p className="font-Josefin">Created At / By</p>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            <svg
              aria-hidden="true"
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            {moment(blog.createdAt).startOf("hour").fromNow()}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            {blog.createdBy?.name}
          </span>
        </div>
        {/* updated */}
        {blog.updatedBy && (
          <div className="flex flex-nowrap gap-4 mt-3">
            <p className="font-Josefin">updated At / By</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              <svg
                aria-hidden="true"
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {moment(blog.updatedAt).startOf("hour").fromNow()}
            </span>
            <span className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
              {blog.updatedBy?.name}
            </span>
          </div>
        )}
        {/* published */}
        {blog.isPublish && (
          <div className="flex flex-nowrap gap-4 mt-3">
            <p className="font-Josefin">Published Stat / By</p>
            <span className="bg-green-100 text-green-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-green-200 dark:text-green-800">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </span>
            <span className="bg-green-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
              {blog.publishedBy?.name}
            </span>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default SingleBlog;
