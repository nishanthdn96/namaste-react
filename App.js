// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React.");
// console.log(heading)
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(heading);

const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm a h1 tag")
    )
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"))
rootReact.render(heading);
