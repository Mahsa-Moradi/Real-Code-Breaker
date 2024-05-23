import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";
function Draglist({ color }) {
  const items = ["1 gbn", "2", "3", "4", "5", "6"];
  const itemList = items.map((item, index) => {
    return (
      <Drag
        // id={"option" + option.id}
        key={index}
        // style={option.style}
        // dataItem={option}
        // dragImage={logo}
        // dropEffect="link"
      >
        <div className="item">{item}</div>
      </Drag>
    );
  });
  return (
    <div className="drag-drop-container">
      <p>{color}</p>
      <div className="info0">
        <span>{itemList}uuu</span>
        {/* <span>{itemList}</span>
        <span>{itemList}</span>
        <span>{itemList}</span>
        <span>{itemList}</span>
        <span>{itemList}</span> */}
      </div>
    </div>
  );
}
export default Draglist;

// export default dragList;
// ..........................................

// options: [
//   {
//     id: 1,
//     label: "***",
//     value: " 1",
//     style: {
//       backgroundColor: "rgb(51, 255, 15)",
//     },
//   },
//   {
//     id: 2,
//     label: "***",
//     value: " 2",
//     style: {
//       backgroundColor: "rgb(255, 102, 0)",
//     },
//   },
//   {
//     id: 3,
//     label: "***",
//     value: " 3",
//     style: {
//       backgroundColor: "rgb(191, 0, 255)",
//     },
//   },
//   {
//     id: 4,
//     label: "***",
//     value: " 4",
//     style: {
//       backgroundColor: "rgb(23, 15, 255)",
//     },
//   },
//   {
//     id: 5,
//     label: "***",
//     value: " 5",
//     style: {
//       backgroundColor: "rgb(255, 0, 0)",
//     },
//   },
//   {
//     id: 6,
//     label: "***",
//     value: " 6",
//     style: {
//       backgroundColor: "rgb(218, 252, 0)",
//       display: "flex",
//       margin: "auto",
//       paddingTop: "1em",
//       paddingBottom: "1em",
//       paddingLeft: "1em",
//       borderBottom: "solid",
//       borderColor: "black",
//       borderWidth: ".1em",
//       color: "#64bd9a",
//     },
//   },
// ],
