import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";

this.items = {
  options: [
    {
      id: 1,
      label: "***",
      value: "circle 2",
      style: {
        display: "flex",
        margin: "auto",
        paddingTop: "1em",
        paddingBottom: "1em",
        paddingLeft: "1em",
        borderBottom: "solid",
        borderColor: "black",
        borderWidth: ".1em",
        color: "#64bd9a",
        backgroundColor: "rgb(51, 255, 15)",
      },
      tooltip_text: "Receive **** ",
    },
    {
      id: 2,
      label: "***",
      value: "circle 2",
      style: {
        //   display: "flex",
        //   margin: "auto",
        //   paddingTop: "1em",
        //   paddingBottom: "1em",
        //   paddingLeft: "1em",
        //   borderBottom: "solid",
        //   borderColor: "black",
        //   borderWidth: ".1em",
        //   color: "#64bd9a",
        backgroundColor: "rgb(255, 102, 0)",
      },
      tooltip_text: "Receive **** ",
    },
    {
      id: 3,
      label: "***",
      value: "circle 3",
      style: {
        //   display: "flex",
        //   margin: "auto",
        //   paddingTop: "1em",
        //   paddingBottom: "1em",
        //   paddingLeft: "1em",
        //   borderBottom: "solid",
        //   borderColor: "black",
        //   borderWidth: ".1em",
        //   color: "#64bd9a",
        backgroundColor: "rgb(191, 0, 255)",
      },
      tooltip_text: "Receive **** ",
    },
    {
      id: 4,
      label: "***",
      value: "circle 4",
      style: {
        //   display: "flex",
        //   margin: "auto",
        //   paddingTop: "1em",
        //   paddingBottom: "1em",
        //   paddingLeft: "1em",
        //   borderBottom: "solid",
        //   borderColor: "black",
        //   borderWidth: ".1em",
        //   color: "#64bd9a",
        backgroundColor: "rgb(23, 15, 255)",
      },
      tooltip_text: "Receive **** ",
    },
    {
      id: 5,
      label: "***",
      value: "circle 5",
      style: {
        //   display: "flex",
        //   margin: "auto",
        //   paddingTop: "1em",
        //   paddingBottom: "1em",
        //   paddingLeft: "1em",
        //   borderBottom: "solid",
        //   borderColor: "black",
        //   borderWidth: ".1em",
        //   color: "#64bd9a",
        backgroundColor: "rgb(255, 0, 0)",
      },
      tooltip_text: "Receive **** ",
    },
    {
      id: 6,
      label: "***",
      value: "circle 6",
      style: {
        //   display: "flex",
        //   margin: "auto",
        //   paddingTop: "1em",
        //   paddingBottom: "1em",
        //   paddingLeft: "1em",
        //   borderBottom: "solid",
        //   borderColor: "black",
        //   borderWidth: ".1em",
        //   color: "#64bd9a",
        backgroundColor: "rgb(218, 252, 0)",
      },
      tooltip_text: "Receive **** ",
    },
  ],
};

export default () => {
  return (
    <div className="drag-drop-container">
      {this.props.options.map((option) => (
        <Drag
          id={"option" + option.id}
          key={option}
          style={option.style}
          dataItem={option}
          dragImage={logo}
          dropEffect="link"
        >
          <div className="item">{option}</div>
        </Drag>
      ))}
    </div>
  );
};
