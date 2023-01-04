import React from "react";
import ReactDOM from "react-dom/client";

console.log("executing script");
const root = ReactDOM.createRoot(document.querySelector("#root"));
// document.getElementById("root");
const reactElement = React.createElement("h1", {className: "namaste",key:"test_h1"}, "Namaste React using React");
// root.render(reactElement)

console.log(reactElement);

const paragraphElement = React.createElement("p", {className:"text",key : "test_p"},  "Chapter 03-Laying Foundation");
console.log(container);

const jsx_syntax = (<h1 id = "jsx" key="jsx" className= "namaste_jsx">
JSX syntax inside React! {'\u2729'} {'\u{1F64F}'}
</h1>)

const container = React.createElement("div", {className:"container",key: "test_div"}, [reactElement, paragraphElement,jsx_syntax])

// React.createElement => Object => HTML(DOM)
root.render(container);