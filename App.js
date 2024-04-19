import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// JSX heading
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTML render
const heading = <h1 id="heading">React meri jaan - heading element</h1>;

// React Components
// 1. React Functional component

const Title = () => (
  <h1 className="title">React meri jaan - Title component</h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>React meri jaan - Functional Component</h1>
    {heading}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
