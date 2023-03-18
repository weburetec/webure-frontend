import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import File from "../../../controls/file";
import Input from "../../../controls/input";
import { validationSchema } from "./validation";
import {
  createBlog,
  getBlog,
  updateBlog,
} from "../../../feature/action/blog/blogAction";
import TextEditor from "../../../controls/textEditor";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const AddBlog = () => {
  const [picture, setPicture] = useState(null);
  const [shortDesc, setShortDesc] = useState(EditorState.createEmpty());
  const [longDesc, setLongDesc] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const formHandler = async (values) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("shortDescription", values.shortDescription);
    data.append("longDescription", values.longDescription);

    if (values.picture) {
      // file upload
      data.append("picture", values.picture);
    }

    (await id)
      ? dispatch(updateBlog({ data, id }))
      : dispatch(createBlog(data));

    router.push("/admin/blogs");
  };

  const { blog, loader } = useSelector((state) => state.blogReducer);

  // useEffect
  // useEffect(() => {
  //   if (blog?.shortDescription?.length > 0) {
  //     setShortDesc(
  //       EditorState?.createWithContent(
  //         ContentState.createFromBlockArray(
  //           convertFromHTML(blog?.shortDescription)
  //         )
  //       )
  //     );
  //   }
  //   if (blog?.longDescription?.length > 0) {
  //     setLongDesc(
  //       EditorState?.createWithContent(
  //         ContentState.createFromBlockArray(
  //           convertFromHTML(blog?.longDescription)
  //         )
  //       )
  //     );
  //   }
  // }, [blog, id]);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [id]);

  useEffect(() => {
    setLongDesc(EditorState.createEmpty());
    setShortDesc(EditorState.createEmpty());
  }, []);

  return (
    <div className="p-2 lg:p-4 rounded-md">
      <p className="text-lg font-semibold tracking-wider mb-2">
        {id ? "Edit" : "Add"} Blog
      </p>
      <div className="flex gap-4">
        <div className="lg:w-[80%]">
          <Formik
            initialValues={{
              title: id ? blog.title : "",
              shortDescription: id ? blog.shortDescription : "",
              longDescription: id ? blog.longDescription : "",
              picture: null,
            }}
            onSubmit={formHandler}
            validationSchema={!id && validationSchema}
            enableReinitialize
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              handleBlur,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  name="title"
                  label="Blog Title"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                <div className={`${picture && "grid grid-col gap-3"} mb-3`}>
                  <File
                    onChange={(e) => {
                      setFieldValue("picture", e.target.files[0]);
                      setPicture(URL?.createObjectURL(e.target.files[0]));
                    }}
                    name="picture"
                    src={
                      id === undefined
                        ? picture
                        : picture ??
                          `${axios.defaults.baseURL}/blog/${blog.picture}`
                    }
                    imageStyle="h-64 object-fill mt-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <TextEditor
                    onChange={(val) => {
                      setShortDesc(val);
                      setFieldValue("shortDescription", val);
                    }}
                    placeholder="Enter Short Description ..."
                    className="mt-2"
                    value={values.shortDescription}
                    toolbarId="shortDescription"
                  />
                  <div className="mb-28 md:mb-12" />

                  {/* <Editor
                    editorState={shortDesc}
                    placeholder="Enter Short Description ..."
                    onEditorStateChange={(val) => {
                      setShortDesc(val);
                      setFieldValue(
                        "shortDescription",
                        draftToHtml(convertToRaw(val.getCurrentContent()))
                      );
                    }}
                    editorStyle={{
                      backgroundColor: "white",
                      height: "250px",
                      padding: "10px 20px",
                      overflow: "scroll",
                    }}
                    editorClassName="mt-2 p-10 mx-auto border-2"
                  /> */}
                  <TextEditor
                    onChange={(val) => {
                      setLongDesc(val);
                      setFieldValue("longDescription", val);
                    }}
                    placeholder="Enter Long Description ..."
                    value={values.longDescription}
                    toolbarId="longDescription"
                  />
                  <div className="mb-32 md:mb-10" />

                  {/* <Editor
                    editorState={longDesc}
                    placeholder="Enter Long Description ..."
                    onEditorStateChange={(val) => {
                      setLongDesc(val);
                      setFieldValue(
                        "longDescription",
                        draftToHtml(convertToRaw(val.getCurrentContent()))
                      );
                    }}
                    editorStyle={{
                      backgroundColor: "white",
                      height: "250px",
                      padding: "10px 20px",
                      overflow: "scroll",
                    }}
                    editorClassName="mt-2 p-10 mx-auto border-2"
                  /> */}
                </div>

                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4"
                >
                  {id ? "Update" : "Add"} Blog
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lg:w-[20%]">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, adipisci!
          Adipisci assumenda, fugit repellat sequi quis nisi sint, dignissimos
          nihil suscipit dolore ipsum voluptas ipsa fugiat laborum hic eligendi
          natus? */}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
