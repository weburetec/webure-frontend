import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { ErrorMessage } from "formik";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ ...rest }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ color: [] }, { background: [] }],
      [{ direction: "rtl" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  return (
    <>
      <ReactQuill
        modules={modules}
        {...rest}
        theme="snow"
        style={{
          zIndex: "999999",
          height: 250,
        }}
      />
      <br />
    </>
  );
};

export default TextEditor;
