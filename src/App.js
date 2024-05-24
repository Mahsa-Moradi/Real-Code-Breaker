"use client";
import React from "react";
import { useState } from "react";
import "./page-module.css";
import DragList from "./DragList";
import DropList from "./DropList";
import Frame from "./frame";
import "./App.css";
// import "./App.css";

//  ************************************ main code
function Game() {
  return (
    <>
      <div>{<Frame />}</div>
      {/* ............................................. */}
      {/* <div className="container-fluid styleItem">
        <div className="row stylerow">
        </div>
      </div> */}
    </>
  );
}
export default Game;
