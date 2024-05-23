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
      <div className="container-fluid styleItem">
        <div className="row stylerow">
          <div className="col-6 stylecol">
            <DragList
              value={"1"}
              color={"green"}
              backgroundColor={"rgb(23, 15, 255)"}
            />
            {/* <DragList value={"2"} /> */}
            {/* <DragList value={"3"} /> */}
            {/* <DragList value={"4"} /> */}
            {/* <DragList value={"5"} /> */}
            {/* <DragList value={"6"} /> */}
          </div>
          <div className="col-6 stylecol">
            <DropList />
          </div>
        </div>
      </div>
    </>
  );
}
export default Game;
