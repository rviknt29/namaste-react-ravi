// Example for nested DOM created using react
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },

    // If only one element needs to be created
    // React.createElement("h1", {}, "I am h1 tag in nested element")

    // If need to create siblings element inside same tag
    [
      React.createElement("h1", {}, "I am h1 tag in nested element"),
      React.createElement("h2", {}, "I am h2 tag in nested element"),
    ]
  )
);

// The above code looks too messhy and hard to tackle if it goes longer...so jsx comes into picture to sort this out

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// React.createElement -> Its just an object which will create element and pass the props/attributes to this element

// h1 -> Its 1st argument - create an Element
// {} -> 2nd argument - Its the place where we can provide the attribute to the Element tag
// Argument3 -> what to show inside the created element

const root = ReactDOM.createRoot(document.getElementById("root"));
// React always ask for a root element where react_DOM can create dom

root.render(parent);
