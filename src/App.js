import './App.css';
import './components/TodoForm';
import TodoList from './components/TodoList';
import React, { useState } from 'react';
import Timer  from "./components/Timer";
import { BsHouseFill, BsAlarmFill, BsFillPersonCheckFill } from "react-icons/bs";

function App() {

  const active = [1,0,0];

  return (
    <div className="main-section">
    <div>
      <div className="status">
      <Timer active={active[0]}></Timer>
      <BsFillPersonCheckFill className="todo-timer-icon"></BsFillPersonCheckFill>
      <br></br>
      <Timer active={active[1]}></Timer>
      <BsHouseFill className="todo-timer-icon"></BsHouseFill>
      <br></br>
      <Timer active={active[2]}></Timer>
      <BsAlarmFill className="todo-timer-icon"></BsAlarmFill> 
      </div>
      
    <div className="todo-app">
      <h1> What plans for Today? </h1>
      <TodoList></TodoList>
      </div> 
    </div>
    </div>
  );
}{}

export default App;
