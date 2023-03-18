import React, { useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  deleteBlogById,
  getBlogs,
  updateBlogStatus,
} from "../../../feature/action/blog/blogAction";
import { filterBlog } from "../../../feature/reducer/blog/blogReducer";
import ImageModal from "../../../controls/modalImage";
import { Excerpt } from "../../../utils";

const Blog = () => {
  const dispatch = useDispatch();

  const inputRef = useRef("");

  const router = useRouter();

  const { blogs, loader } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const filterHandler = (e) => {
    e.preventDefault();
    dispatch(filterBlog(inputRef.current.value));
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <ImageModal
          src={`${axios.defaults.baseURL}/blog/${row.picture}`}
          className="h-[60px] w-[60px] p-2 rounded-full"
        />
      ),
    },
    {
      name: "Title",
      selector: (row) => (
        <Link href={`/blog/${row._id}`}>
          <a target="_bank" className="hover:text-black">
            {Excerpt(row.title, 20)}
          </a>
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.createdBy.name,
      sortable: true,
    },
    {
      name: "Updated By",
      selector: (row) => row.updatedBy?.name ?? "----",
      sortable: true,
    },
    {
      name: "Published By",
      selector: (row) => row.publishedBy?.name ?? "----",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={`${
            row.isPublish
              ? "bg-green-100 text-green-800  dark:bg-green-200 dark:text-green-900"
              : "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900"
          } text-xs font-semibold px-2 py-0.5 rounded`}
        >
          {row.isPublish ? "Published" : "Not Published"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => <Dropdown {...row} />,
    },
  ];
  return (
    <div className="container">
    <div className="p-2 lg:p-4 rounded-md">
      <DataTable
        title="Recent Blogs"
        columns={columns}
        data={blogs.data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
        selectableRowsHighlight
        actions={
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider"
            onClick={() => router.push("/admin/add-blog")}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add Blog</span>
            </div>
          </button>
        }
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <form
            className="flex items-center w-full md:w-1/2"
            onSubmit={filterHandler}
          >
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title"
                ref={inputRef}
                onChange={filterHandler}
              />
            </div>
          </form>
        }
      />
    </div>
    </div>
  );
};

export default Blog;

/* -------------------------------------------------------------------------- */
/*                                  Dropdown                                  */
/* -------------------------------------------------------------------------- */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = (row) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Options
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          dir="top"
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {/* PUBLISH */}
          {!row.isPublish && (
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm hover:text-black cursor-pointer hover:bg-blue-300 hover:bg-opacity-20"
                  )}
                  onClick={() => dispatch(updateBlogStatus(row._id))}
                >
                  <div className="flex text-center justify-center gap-2 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <p className="text-blue-500">Publish</p>
                  </div>
                </div>
              )}
            </Menu.Item>
          )}
          {/* VIEW MORE */}
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm hover:text-black cursor-pointer hover:bg-green-300 hover:bg-opacity-20"
                )}
                onClick={() => router.push(`/admin/blog/${row._id}`)}
              >
                <div className="flex text-center justify-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <p className="text-green-500">View More</p>
                </div>
              </div>
            )}
          </Menu.Item>
          {/* DELETE */}
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm hover:text-black cursor-pointer hover:bg-red-300 hover:bg-opacity-20 border"
                )}
                onClick={() =>
                  Swal.fire({
                    title: "Delete?",
                    text: `Are you sure want to Delete?`,
                    icon: "question",
                    showCancelButton: true,
                    cancelButtonColor: "#3085d6",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Yes, Delete it",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(deleteBlogById(row._id));
                    }
                  })
                }
              >
                <div className="flex text-center justify-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  <p className="text-red-500">Delete</p>
                </div>
              </div>
            )}
          </Menu.Item>
          {/* EDIT */}
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm hover:text-black cursor-pointer hover:bg-purple-300 hover:bg-opacity-20"
                )}
                onClick={() => router.push(`/admin/edit-blog/${row._id}`)}
              >
                <div className="flex text-center justify-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <p className="text-purple-500">Edit</p>
                </div>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
