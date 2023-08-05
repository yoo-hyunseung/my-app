import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // html jsp -> style
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello';
<<<<<<< HEAD
const col = "{color:red}"
const name = {firstname : 'hello',lastname : "React"};
function formatUser(name){
  return name.firstname + ' ' + name.lastname;
}
=======
>>>>>>> 942880d (SpringAxios)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  <App/>
  <hr/>
  <br/>
  <Hello/>
  {alert("hello react")}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

