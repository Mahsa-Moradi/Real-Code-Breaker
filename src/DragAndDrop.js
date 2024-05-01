// import React from 'react';

// const DragAndDrop = props => {
//   const handleDragEnter = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDragLeave = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDragOver = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDrop = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   return (
//     <div className={'drag-drop-zone'}
//       onDrop={e => handleDrop(e)}
//       onDragOver={e => handleDragOver(e)}
//       onDragEnter={e => handleDragEnter(e)}
//       onDragLeave={e => handleDragLeave(e)}
//     >
//       <p>Drag files here to upload</p>
//     </div>
//   );
// };
// export default DragAndDrop;
// ***********************************************
// ***********************************************
"use client";
import "./App.js";

// ........................... drag and drop
const DragAndDrop = (props) => {
  const { data, dispatch } = props;
  // handleDragEnter
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });  };
  // handleDragLeave
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };
  // handleDragOver
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };
  // handleDrop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
      e.dataTransfer.clearData();
      dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };
  return (
    // <div
    //   className={"drag-drop-zone"}
    //   onDrop={(e) => handleDrop(e)}
    //   onDragOver={(e) => handleDragOver(e)}
    //   onDragEnter={(e) => handleDragEnter(e)}
    //   onDragLeave={(e) => handleDragLeave(e)}
    // >
    //   <p>Drag files here to upload</p>
    // </div>
    <div
      className={
        data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
      }
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
};
export default DragAndDrop;
//
