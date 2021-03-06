import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.modules.map((mod) => (
      <Card key={mod.moduleCode} mod={mod}></Card>
    ))}
  </div>
);
