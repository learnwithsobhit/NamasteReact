#The Diffing Algorithm
    When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

    There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

    If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

    Two elements of different types will produce different trees.
    The developer can hint at which child elements may be stable across different renders with a key prop.
    In practice, these assumptions are valid for almost all practical use cases.

    ##When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. (https://reactjs.org/docs/reconciliation.html)
    
  ## Babel is compiler which create polyfill.

  # additional notes 

  JSX:

const element = <h1>Hello, world!</h1>;
This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. 
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. 
React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

React.createElement vs JSX:

We would use React.createElement() instead of JSX when we do not want to set up compilation for our project, which the use of JSX requires!
const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

Benefits of JSX:

JSX has the following advantages:

JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.
JSX also allows React to show more useful error and warning messages.
If one is familiar with HTML, it is quite easy to use JSX when building React application
Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

Behind the scenes of JSX:

Because JSX is not valid JavaScript, browsers can’t read it directly; they do not know what to do with it, so we need a transpiler to translate it to React.createElement() calls. We need transpilers (a compiler that translates one form of syntax into another) like Babel or TypeScript to compile JSX into a browser-compatible version.

This occurs during the build process, so the browser will never know JSX was present in the first place. The browser, in turn, receives a tree of objects that have been described using the React API.

In addition, when we write modern JavaScript, especially some of the features introduced in ECMAScript 6, some older browsers can’t make sense of these features. We need to use a transpiler to convert ES6 to ES5.

That’s exactly how it works with JSX as well. Consider this example:

import React from 'react'
function Greet(){
  return <h1>Hello World!</h1>
}
JavaScript
This is a simple component that renders “Hello World” in the browser, and it returns what appears to be HTML, but it isn’t. The h1 tag rendered by the Greet component is a pure JavaScript function call to React.createElement().

The above example would compile into this before being used by the browser.

import React from 'react'
function Greet() {
  return React.createElement("h1", {}, "Hello, World!")
}
JavaScript
Notice how in the JSX example above, we didn’t exactly reference the instance of React we imported, but, when compiled, it calls the React.createElement() function. So we need to have React in scope for JavaScript to know what to do with the compiled code.

The createElement() function accepts three parameters and returns a React element:

React.createElement(
  type,
  [props],
  [...children]
)
JavaScript
It is not required to use JSX while writing React, but it makes the development and debugging process easier for developers.

Let’s make a React component using JSX and see how it translates to regular JavaScript function calls.

import React from 'react'

  function App (){
    return (
      <div>
    <p>This is a list</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </div>
  );
};
JavaScript
The compiled code should look like this:

import React from 'react'

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "This is a list"),
    React.createElement(
    "ul",
    null,
    React.createElement("li", null, "List item 1"),
    React.createElement("li", null, "List item 2")));
  }
JavaScript
This is also how you would write React without JSX. With a bit of nesting, we can see that it is beginning to get unreadable and ugly. Not only does it look difficult to code, but it also looks difficult to maintain. That’s where JSX comes in, combining the beauty of HTML and the power of JavaScript.

React.createElement() function in the example above would return an object like this:

{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
      "children": [
        {
          "type": "p",
          "key": null,
          "ref": null,
          "props": {
            "children": "This is a list"
          },
          "_owner": null
        },
        {
          "type": "ul",
          "key": null,
          "ref": null,
          "props": {
            "children": [
              {
                "type": "li",
                "props": {
                  "children": "List item 1"
                },
                // truncated for brevity
              },
              {
                "type": "li",
                "props": {
                  "children": "List item 2"
                },
                // truncated for brevity
              }
            ]
          },
          "_owner": null
        }
      ]
    },
    "_owner": null
}
JavaScript
These objects are known as React elements, but they are just plain JavaScript objects. They describe what you want to see on the screen. They represent HTML elements, and they do not live on the page (the “real” DOM)—they live on the virtual DOM. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM.


babel and parcel role in JSX:

Because JSX is not valid JavaScript, browsers can’t read it directly; they do not know what to do with it, so we need a transpiler to translate it to React.createElement() calls. We need transpilers (a compiler that translates one form of syntax into another) like Babel or TypeScript to compile JSX into a browser-compatible version. Parcel has babel as dependency which helps to convert JSX to browser readable javascript code.

Components in React:

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 

Functional components in React:

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 

Component Composition in React:

In React, we can make components more generic by accepting props, which are to React components what parameters are to functions.

Component composition is the name for passing components as props to other components, thus creating new components with other components.

