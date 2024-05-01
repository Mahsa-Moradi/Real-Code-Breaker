"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./page-module.css";
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
// drop and drag
// function dropAndDrag() {
//   const [parent, setParent] = useState(null);
//   const draggable = (
//     <Draggable id="draggable">
//       Go ahead, drag me.
//     </Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!parent ? draggable : null}
//       <Droppable id="droppable">
//         {parent === "droppable" ? draggable : 'Drop here'}
//       </Droppable>
//     </DndContext>
//   );

//   function handleDragEnd({over}) {
//     setParent(over ? over.id : null);
//   }
// }
// .............  Timer
// const Timer = () => {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   return(
//     <div className="timer "></div>
//   )
// };
//
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
    </div>
  );
}

// ************************************ main code
function Game() {
  return <div>{<Frame />}</div>;
}
export default Game;
