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
        <p >1</p>
        {/*  ناحیه رها کردن */}
        <div className="drag-drop-container  ">
          {items.map((item) => (
            <div key={item} className="item">
              {/* harchi dakhele keshidan dayereh darim */}
            {/* <p className="bodydrop">oo</p> */}
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
