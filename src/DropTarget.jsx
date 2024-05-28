import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const insideStyle = {
  backgroundColor: "#deac4d",
  opacity: 0.5,
  height: "500px",
  with: "400px",
};

const DropTarget = (props) => {
  const [isOver, setIsOver] = React.useState(false);
  // ..................

  // . رویداد "درگ اور" زمانی رخ می‌دهد که یک عنصر قابل کشیدن (draggable) بر روی عنصر دیگری که این رویداد را هندل می‌کند، کشیده می‌شود.
  //  هنگام رها کردن وظایف چه اتفاقی باید بیفتد استفاده کنید.
  const dragOver = (ev) => {
    // لغو رویداد
    ev.preventDefault();
    // عنصر "اچ تی ام ال" که رویداد "درگ اور" در آن رخ داده است، خوانده می‌شود.
    ev.dataTransfer.dropEffect = props.dropEffect;
  };
  // ..................
  // این رویداد زمانی رخ می‌دهد که عنصری قابل کشیدن  بر روی عنصر دیگری که قابلیت رها کردن  دارد، رها شود.

  //"drag-item" =. این داده حاوی اطلاعات مربوط به عنصری است که رها شده است.
  const drop = (ev) => {
    const droppedItem = ev.dataTransfer.getData("drag-item");
    if (droppedItem) {
      props.onItemDropped(droppedItem);
    }
    // آیا عنصری در حال حاضر بر روی عنصر قابل رها شدن قرار دارد یا خیر.
    setIsOver(false);
  };
  // ..................

  const dragEnter = (ev) => {
    ev.dataTransfer.dropEffect = props.dropEffect;
    setIsOver(true);
  };
  // ..................
  // function Circle({ value }) {
  //   return <input className="circle">{value}</input>;
  // }
  //
  const dragLeave = () => setIsOver(false);

  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={{
        width: "100%",
        height: "100%",
        color: "yellow",
        ...(isOver ? insideStyle : {}),
      }}
      // style={{ width: "5%", height: "5%" , color:"yellow",borderRadius:"50%", backgroundColor:"green", ...(isOver ? insideStyle : {}) }}
    >
      {props.children}
      {/* <Circle />
      <Circle />
      <Circle />
      <Circle /> */}
    </div>
  );
};
// ...........................................
DropTarget.propTypes = {
  onItemDropped: PropTypes.func.isRequired,
  dropEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
// ...........................................

DropTarget.defaultProps = {
  dropEffect: dropEffects.All,
};

export default DropTarget;
