<<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';
import Hello from "./hello";
function App() {
  let a = 100000;
  return (
    <div> {a}<Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
=======
import {useEffect, useState} from "react";
import axios from 'axios';
import Hello from "./hello";

function App() {
  const [message, setMessage] = useState([]);

    useEffect(() => {
      axios.get("/hello.do").then((response)=>{
        if(response.data){
          setMessage(response.data);
        } else{
          alert("fail");
        }
      });
    },[]);
    
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
        </ul>
        <div>
          <Hello link="board_list.do"/>
        </div>
      </header>
>>>>>>> 942880d (SpringAxios)
    </div>
  );
  }

export default App;
