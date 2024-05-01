"use client";
// import React, { Game } from 'react';
import React from "react";
import { useState } from "react";
import "./page-module.css";
import DragAndDrop from "./DragAndDrop.js";
// import "./DragAndDrop.js";
// import logo from "./logo.svg";
// import "./App.css";
// .............  Circle
function Circle({ value }) {
  return <input className="circle">{value}</input>;
}
// .............  Button
function Button({ value }) {
  return <button className="button">hello</button>;
}
// .............  Timer
// const Timer = () => {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   return(
//     <div className="timer "></div>
//   )
// };
// timeeeeeeeeeeeeeeeeeeeeeeeeeer
// Define the main App component
function App() {
  // Initialize state variables for timer and timeInterval
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    setTimeInterval(
      setInterval(() => {
        // Update the timer by incrementing the previous value by 1
        setTimer((prev) => prev + 1);
      }, 1000)
    );
  };

  // Function to pause the timer
  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval);
  };

  // Function to reset the timer
  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0);
    // Clear the interval to stop the timer
    clearInterval(timeInterval);
  };

  // Render the timer and buttons in the component
  return (
    <div className="App">
      <h3>Timer: {timer}</h3>
      {/* btn */}
      <div className="btn-wrapper">
        {/* Button to start the timer */}
        <button onClick={startTimer}>Start</button>
        {/* Button to pause the timer */}
        <button onClick={pauseTimer}>Pause</button>
        {/* Button to reset the timer */}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

//end timer
function Frame(Circles) {
  // const [data,setData] = useState('null');
  const [,] = useState();

  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    const [data,setData] = useState('ev.dataTransfer.getData("text")');
    ev.preventDefault();
    ev.target.setData(data);
  }
  return (
    <div className="container">
      <div className="frameGame">
        {/* 1 */}
        <div className="result">
          {/* 1a result*/}
          <div className="resultCircle">
            {/* <Circle
                value={Circles[1]}
              /> */}
            <span>
              <b>?</b>
            </span>
            <span>
              <b>?</b>
            </span>
            <span>
              <b>?</b>
            </span>
            <span>
              <b>?</b>
            </span>
          </div>
          {/* number10 */}
          <div className="number10"> 6</div>
        </div>
        {/* 2a time*/}
        <div className="timer">
          <App />
        </div>
        {/* 3a play*/}
        <div className="play">
          {/* 1 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* 2 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* 3 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* 4 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* 5 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* 6 */}
          <div className="row">
            <Circle value={Circles[1]} />
            <Circle value={Circles[2]} />
            <Circle value={Circles[3]} />
            <Circle value={Circles[4]} />
            {/* div-play */}
            <div className="whiteBlack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/*  */}
        </div>
        {/* 2 */}
        <div className="info">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>

      {/* div test */}
      <p>Drag the W3Schools image into the rectangle:</p>
      <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <img
        id="drag1"
        src="img_logo.gif"
        draggable="true"
        ondragstart="drag(event)"
        width="336"
        height="69"
      ></img>
      {/*  */}
    </div>
  );
}
//  ************************************ main code
function Game() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };
  // const { data, dispatch } = props;
  const [data, dispatch] = React.useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  return (
    <>
      <div>{<Frame />}</div>

      <div className="Appp">
        <h1>React drag-and-drop component</h1>
        <DragAndDrop data={data} dispatch={dispatch} />
        {/* <DragAndDrop /> */}
        <ol className="dropped-files">
          {data.fileList.map((f) => {
            return <li key={f.name}>{f.name}</li>;
          })}
        </ol>
      </div>
    </>
  );
}
export default Game;
