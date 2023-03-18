import React from "react";

export default function Container(props) {
  return (
    <div className={`container p-2 mx-auto xl:px-0 ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}
