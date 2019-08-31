import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundementals of React",
        exercise: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercise: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercise: 1,
        id: 3
      },
      {
        name: "Redux",
        exercise: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercise: 5,
        id: 1
      },
      {
        name: "Middlewares",
        exercise: 7,
        id: 2
      }
    ]
  }
]

ReactDOM.render(<App courses={courses} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
