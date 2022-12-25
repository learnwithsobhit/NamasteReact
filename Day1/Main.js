const root = ReactDOM.createRoot(document.querySelector("#root"));
const reactElement = React.createElement("h1", {className: "namaste",key:"test_h1"}, "Namaste React using React");
root.render(reactElement)

const paragraphElement = React.createElement("p", {className:"text",key : "test_p"},  "Chapter 01-Inception");
const container = React.createElement("div", {className:"container",key: "test_div"}, [reactElement, paragraphElement])

const testheader = React.createElement("h2",{className:"text",key:"test_text"},"I am outside Container!")

root.render([container,testheader]);
