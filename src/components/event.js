import { useEffect } from "react";
import "../css/events.scss";

const Events = () => {
  return (
    <div className="container-fluid" id="eventContainer">
      <figure className="icon-cards mt-3">
        <div className="icon-cards__content">
          <div className="icon-cards__item d-flex align-items-center justify-content-center">
            <span className="h1">🙂</span>
          </div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center">
            <span className="h1">😊</span>
          </div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center">
            <span className="h1">😀</span>
          </div>
        </div>
      </figure>
    </div>
  );

  function classToggle() {
    var el = document.querySelector(".icon-cards__content");
    el.classList.toggle("step-animation");
  }

  document
    .querySelector("#toggle-animation")
    .addEventListener("click", classToggle);
};

export default Events;
