import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const h1Element = React.createElement(
//   "h1", { id: "h1-id" }, "Welcome to Debugger Solutions, React Element"
// );

root.render(
  <App />
);

// const h1Element = document.createElement("h1");
// h1Element.innerText = "Welcome to Debugger Solutions, document";

// document.getElementById("root").appendChild(h1Element);


// React.StrictMode ->  Enable Additional checks for developing and performing

// Virtual DOM
// React create a light weight replica/copy of a real DOM
// It is fast then real DOM
// Reconciliation -> 2 virtual DOM compare when any changes occur in react code
// Batch Updation
