/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const ReachElem = <span className='sub-heading'>Hello jsx inside element</span>;
const jsxHeading = (
  <h2 id='head' className='heading'>
    {ReachElem}
    Hello jsx
  </h2>
);
//type of component
// class base component : old way
// function base component :new way
// Function base component

const TitleComponent = () => {
  return (
    <div className='title'>
      <h1> Title component</h1>
    </div>
  );
};
// inject component inside component called component composition
const HeadingComponent = () => {
  return (
    <div id='container'>
      {jsxHeading}
      <TitleComponent />

      <h2 id='head' className='heading'>
        {" "}
        Hello jsx component
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
