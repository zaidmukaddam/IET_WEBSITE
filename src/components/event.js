import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import "../App.css";
import "../css/events.scss";

const Events = () => {
  return (
    <div className="container-fluid" id="eventContainer">
      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
        <div
          data-src={
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"
          }
        />
        <div
          data-src={
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"
          }
        />
        <div
          data-src={
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"
          }
        />
      </AwesomeSlider>
    </div>
  );
};

export default Events;
