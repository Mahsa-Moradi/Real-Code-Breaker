import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";
function Draglist({ color, value }) {
  // options: [],
  const items = {
    options: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  };
  return (
    <div className="drag-drop-container">
      {/* <p>{color}</p>
            <div className="info">
            <span>{value}</span>
            <span>{value}</span>
            <span>{value}</span>
            <span>{value}</span>
            <span>{value}</span>
            <span>{value}</span>
          </div> */}
      {items.options.map((option, index, value, i) => (
        <Drag
          value={index[i]}
          // id={"option" + option.id}
          // key={value}
          // key={index}
          // style={option.style}
          // dataItem={option}
          // dragImage={logo}
          // dropEffect="link"
        >
          <div className="item">{option}</div>
        </Drag>
      ))}
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
// ......*********************_____________________________

// **********************______________________________________________

// import React from "react";
// import Drag from "./Drag";
// import logo from "./logo.png";
// function Draglist({ color }) {
//   // const items = ["1 gbn", "2", "3", "4", "5", "6"];
//   const items = {
//     options: [
//       {
//         id: 1,
//         // label: "one***",
//         value: "circle 2",
//         style: {
//           backgroundColor: "rgb(51, 255, 15)",
//         },
//         tooltip_text: "Receive **** ",
//       },
//       {
//         id: 2,
//         // label: "two***",
//         value: "circle 2",
//         style: {
//           backgroundColor: "rgb(255, 102, 0)",
//         },
//       },
//     ],
//   };
//   // ....
//   const itemList = items.options.map((option, index) => {
//     return (
//       <Drag
//         id={"option" + option.id}
//         key={option}
//         // key={index}
//         // target={index[x]}
//         style={option.style}
//         // dataItem={option}
//         // dragImage={logo}
//         // dropEffect="link"
//       >
//         <div className="item">{option}</div>
//       </Drag>
//     );
//   });
//   return (
//     <div className="drag-drop-container">
//       <p>{color}</p>
//       <div className="info0">
//         <span>{itemList}uuu</span>
//         {/* <span>{itemList}</span>
//         <span>{itemList}</span>
//         <span>{itemList}</span>
//         <span>{itemList}</span>
//         <span>{itemList}</span> */}
//       </div>
//     </div>
//   );
// }
// export default Draglist;

// // export default dragList;
// // ..........................................

// // ..........................
// // player.markers۱({ markerStyle: { 'width':'۹px', 'border-radius': '۴۰%', 'background-color': 'orange' }, markerTip:{ display: true, text: function(marker) { return "I am a marker tip: "+ marker.text; } }, breakOverlay:{ display: true, displayTime: ۴, style:{ 'width':'۱۰۰%', 'height': '۳۰%', 'background-color': 'rgba(۱۰,۱۰,۱۰,۰.۶)', 'color': 'white', 'font-size': '۱۶px'}, text: function(marker) { return "This is a break overlay: " + marker.text + marker.overlayText; }, }, outmarkers: [ {time: ۹.۵, text: "this", overlayText: "۱" ,class: "marker-blue" }, {time: ۴۰, text: "is", overlayText: "۲"}, {time: ۶۰.۶,text: "so", overlayText: "۳"}, {time: h, text: "cool", overlayText: "۴"} ]});```
// // ............................

// // var person = ["John", "Doe", 46];

// // person[0] // John

// // var person = {firstName:"John", lastName:"Doe", age:46};

// // person.firstName // John

// // var ourPets = [

// //   {

// //     animalType: "cat",

// //     names: [

// //       "Meowzer",

// //       "Fluffy",

// //       "Kit-Cat"

// //     ]

// //   },

// //   {

// //     animalType: "dog",

// //     names: [

// //       "Spot",

// //       "Bowser",

// //       "Frankie"

// //     ]

// //   }

// // ];

// // ourPets[0].names[1]; // "Fluffy"

// // ourPets[1].names[0]; // "Spot"
