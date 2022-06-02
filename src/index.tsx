import { createTextElement, render, createElement } from "./utils";
import type { BasicElement } from "./utils";

// JSX Element
// Plain Old JavaScript Object
// it has a type and a prop

// it has a type and a prop (also a key)

// Example:

/*
const element = {
  type: "h1",
  props: {
    children: "Hello World"
  }
};
*/

// Let's create an text element and render it in the web page
// const container = document.getElementById("root");
// const textEl: BasicElement = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "I am a Text!"
//   }
// };
// render(textEl, container);

// abstract again using a function
// const container = document.getElementById("root");
// const h2Text = createTextElement("I am H2 Element");
// const h2Element = createElement("h2", undefined, h2Text);
// render(h2Element, container);

// finally JSX as we see nowdays in React
// const React = { createElement }; // JSX will transform to React.createElement, so we will mock it by creating a React object
// const container = document.getElementById("root");
// const jsxElement = <h1>Hello JSX Element!!!!</h1>;
// render(jsxElement, container);

// because render function is recursive, we can create a tree of elements
const React = { createElement }; // JSX will transform to React.createElement, so we will mock it by creating a React object
const container = document.getElementById("root");
const BigElement = () => (
  <div>
    <h1>This is a H1</h1>
    <h2>This is a H2</h2>
    <h3>Hao</h3>
  </div>
);
render(<BigElement />, container);
