import React from "react";

import "./search-box.styles.css";

export const SearchBox = (props) => (
  <input
    className="search"
    type="text"
    placeholder={props.placeholder}
    onChange={props.changeHandler}
  ></input>
);