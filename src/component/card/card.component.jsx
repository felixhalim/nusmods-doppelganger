import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <h2>{props.mod.moduleCode}</h2>
    <h3>{props.mod.title}</h3>
    <p>
      Offered in Semester
      {props.mod.semesters.length > 1 ? ` 1 and 2` : ` ${props.mod.semesters}`}
    </p>
  </div>
);
