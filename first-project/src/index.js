import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode ->  Enable Additional checks for developing and performing

// Virtual DOM
// React create a light weight replica/copy of a real DOM
// It is fast then real DOM
// Reconciliation -> 2 virtual DOM compare when any changes occur in react code
// Batch Updation

// Course Overview

// JSX

/*

- UI Update
- JSX
- component reuse
- Props/states
- Hooks
- Router
- State Management
  - Redux, Redux toolkit
- class based component

*/