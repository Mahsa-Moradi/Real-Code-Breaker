import React from "react";
import DropTarget from "./DropTarget";
import frame from "./frame";

export default () => {
  const [items, setItems] = React.useState([]);

  const itemDropped = (item) => setItems([...items, item]);
  return (
    <>
      {/* .................... */}
      <DropTarget onItemDropped={itemDropped} dropEffect="link">
        {/*  ناحیه رها کردن */}
        <div className="drag-drop-container  ">
          {items.map((item) => (
            <div key={item} className="item">
             <input type="text">hello</input>
            </div>
          ))}
        </div>
      </DropTarget>
    </>
  );
};

// ...................
// function Circle({ value }) {
//     return <input className="circle">{value}</input>;
//   }
// export default (Circles) => {
//     const [items, setItems] = React.useState([]);

//     const itemDropped = item => setItems([...items, item]);
//     return (
//         <DropTarget  onItemDropped={itemDropped} dropEffect="link">
//             <div className="drag-drop-container">
//                 {items.map(item => (
//                     <div key={item} className="item">
//                         {item}
//  {/* 2 */}
//  <div className="row">
//             {/* <Circle value={Circles[1]} /> */}

//           </div>
//                     </div>
//                 ))}
//             </div>
//         </DropTarget>
//         // ........

//     );
// };
