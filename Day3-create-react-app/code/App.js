import React from "react";
import ReactDOM from "react-dom/client";
import jsx_html_image from './image/jsx_html.png';

console.log("executing script");
const root = ReactDOM.createRoot(document.querySelector("#root"));
// document.getElementById("root");
const reactElement = React.createElement("h1", {className: "namaste",key:"test_h1"}, "Namaste React using React");
// root.render(reactElement)

console.log(reactElement);

const paragraphElement = React.createElement("p", {className:"text",key : "test_p"},  "Chapter 03-Laying Foundation");

const jsx_syntax = (<h1 id = "jsx" key="jsx" className= "namaste_jsx">
JSX syntax inside React! {'\u2729'} {'\u{1F64F}'}
</h1>
)

const img_jsx = (
                    <div key="image">
                    <div className="div" key="div_img_global">
                    <img  className="imag_jsx"
                    src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687457/retina_1708x683_staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-816eafe06505b888585d08474f2166e7.png" key="img_jsx"/>
                    </div>
                    <div className="div" key="div_img_local">
                    <img  className="imag_jsx"
                    src={jsx_html_image} key="img_jsx1"/>
                    </div>
                    </div>
                )

const FunctionComponent = () =>{
    return <h1 className ="namaste" key="fc">Namaste {'\u{1F64F}'} function component!</h1>
}

const FunctionComponent1 = () =>{
    return <h1 className ="namaste_jsx" key="fc1">I am functional component and a normal javascript function! {'\u2729'}</h1>
}
const xyz = "you can write anything inside functional component!"
//React.createElement("div", {className:"container",key: "test_div"}, [reactElement, paragraphElement,jsx_syntax,img_jsx])
const Container = () => (
                            <div className="conatiner" key="test_div">
                            {reactElement}
                            {paragraphElement}
                            {jsx_syntax}
                            <FunctionComponent/>
                            {FunctionComponent1()}
                            {xyz} {1+2}
                            {img_jsx}
                            </div>
                        )
// React.createElement => Object => HTML(DOM)
//Babel convert JSX to react element
root.render(<Container/>);
