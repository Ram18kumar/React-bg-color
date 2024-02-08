// import logo from './logo.svg';
// import './App.css';
// import React,{ useState,useEffect } from 'react';
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const[color,setColor]=useState("yellow")
  const click = color => {
    setColor(color)
  }
  useEffect(()=>{

  },[color])
  return (
   <div className="App">
    <button onClick={
      ()=>click("red")
    }>Click here to change color</button>
   </div>
  )
}

export default App;
