import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Nishanth 🚀"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste Reat using JSX 🚀
  </h1>
);

const HeadingComponent = () => {
  return <h1>Namaste React Functional component</h1>;
};

const HeadingComponent2 = () => <h1>Namaste React Functional component</h1>;
console.log(HeadingComponent2);
root.render(HeadingComponent());
