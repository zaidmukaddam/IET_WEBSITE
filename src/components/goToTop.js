import React from "react";
import "../App";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const ToTop = () => {
  return (
    <div className="toTopButton" onClick={() => { this.scroll(this.toTop) }}>
      <div className="upIcon">
        {" "}
        <box-icon name="up-arrow" color="white" crossOrigin></box-icon>
      </div>
    </div>
  );
};
export default ToTop;
