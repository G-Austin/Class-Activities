import React from "react";

const name = "Glo";
const nameNum = 3;
const thoughts = "is really stinking user friendly once you know where to put stuff."

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {nameNum} letters</h2>
        <h2>I think React {thoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
