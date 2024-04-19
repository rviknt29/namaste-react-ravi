import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX heading 
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
