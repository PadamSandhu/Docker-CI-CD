import React from "react";

export default function Button(props) {
  return (
    <a href="#" className={props.class ? `btn ${props.class}` : "btn"}>
      {props.text ? props.text : ""}
    </a>
  );
}
