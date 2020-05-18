import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <h2>{props.mod.title}</h2>
    <p>{props.mod.moduleCode}</p>
  </div>
);
