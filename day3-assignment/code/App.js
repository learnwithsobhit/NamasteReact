import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/logo.jpg';

//using create element
const header = React.createElement("div",{
    key:"div_root",
    className:"title"
},
[
    React.createElement("h1",{key: "h1",className:"header1"},"I am h1"),
    React.createElement("h2",{key:"h2",className:"header2"},"I am h2"),
    React.createElement("h3",{key:"h3",className:"header3"},"I am h3")
])

//using JSX
const header_jsx = (
    <div className="title" key="div_root_header">
        <h1 className="header1" key="h1_jsx">"I am h1"</h1>
        <h2 className="header2" key="h2_jsx">"I am h2"</h2>
        <h3 className="header3" key="h3_jsx">"I am h3"</h3>
    </div>
)

const H1Component = ()=>{
    return <h1 className="header1" key="h1_cmp">"I am h1"</h1>
}

const H2Component = ()=>{
    return <h2 className="header2" key="h2_cmp">"I am h2"</h2>
}

const H3Component = ()=>{
    return <h3 className="header3" key="h3_cmp">"I am h3"</h3>
}

// using functional component
const TitleComponent = ()=>{
    return (<div className="title" key="div_root_title">
            <H1Component/>
            <H2Component/>
            <H3Component/>
            </div>)
}

const header_jsx_attr= (
    <div className="title">
      <h1 id="heading1" titlename="namaste"> <a href="https://learn.namastedev.com/">Namaste {'\u{1F64F}'} React Live </a></h1>
      <h2>Chapter 03 : Laying the foundation</h2>
      <h3>Nested header element with h1,h2,h3 using JSX and pass attributes</h3>
    </div>
  );

//component compostion 
const NestedComponent = function () {
    return (
      <div>
        <HeaderComponent />
        {header}
        {header_jsx}
        {header_jsx_attr}
        { TitleComponent }{/* It does not work and warning is thrown in console since TitleComponent is a component and not a react element*/}
        { TitleComponent() }{/* It works as functional component is normal javascript function*/}
        { <TitleComponent /> } {/* It works since TitleComponent is enclosed within <> */}
        { <TitleComponent> </TitleComponent> } {/* It works since TitleComponent is enclosed within <> */}
        
      </div>
    );
  }

// header from scratch
const HeaderComponent = function (){
    return(
        <div className="heading-wrapper" key="div_key">
            <div className="logo-wrapper" key= "logo_key">
            <img src={logo} alt="Logo" key= "img_key"/>
            <span className="logo-name" key= "span_key">New Header Component</span>
            </div>
    
            <div className="search" key= "search_key">
            <input type="text" key="search" placeholder="Search for a book"/>
            </div>
        
            <div className="avatar" key= "avatar_key">
            <div className="user-icon" key="user-icon"> </div>
            </div>
        </div>
    );
  }


let root = ReactDOM.createRoot(document.getElementById("root"))

// task 1
// root.render(header)
// task2
// root.render(header_jsx)
//task 3
// root.render(<TitleComponent/>)
// root.render(<HeaderComponent/>)
//task 4
root.render(<NestedComponent/>)
