import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/events.scss";
import ReactCardCarousel from "react-card-carousel";

class Events extends Component {
  static get CARD_STYLE() {
    return {
      height: "max-content",
      width: "auto",
      paddingTop: "80px",
      textAlign: "center",
      background:
        "linear-gradient(to bottom right, rgba(248,225,240,1),rgba(243,160,254,1),rgba(87,79,184,1) )",
      color: "#FFF",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      // boxShadow: "2px 4px 32px -10px rgb(39, 39, 39)",
    };
  }
  render() {
    return (
      <div className="container-fluid" id="eventContainer">
        <ReactCardCarousel autoplay={false} autoplay_speed={2500} spread="wide">
          <div style={Events.CARD_STYLE} id="first">
            <div>
              <img
                src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                alt="test"
              />
            </div>
            <h6 className="text">Botson</h6>
            <p className="text-justify mx-5 ml-2 p-4 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              massa a est pulvinar hendrerit. Ut porttitor nunc at ante
              pharetra, sit amet fermentum elit eleifend. Duis at pretium erat.
              Fusce eu nulla lacus. Suspendisse et tincidunt lacus, id
              ullamcorper neque. Quisque ultricies lectus erat, in tincidunt
              sapien dignissim quis. Fusce vehicula dolor sed vehicula eleifend.
              Curabitur sed libero tortor. Duis ornare, diam eget semper
              aliquet, sem elit condimentum velit, sed ultrices sem ipsum eu
              nulla. Cras dui libero, viverra sed diam dignissim, cursus
              venenatis urna. Etiam ultrices tincidunt ipsum quis pellentesque.
              Duis at rhoncus massa. Ut ut sapien sed est efficitur rhoncus.
              Vivamus sit amet orci maximus, consectetur eros ut, mollis lorem.
              Etiam tincidunt sed arcu suscipit maximus.
            </p>
          </div>
          <div style={Events.CARD_STYLE} id="second">
            <div>
              <img
                src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                alt="test"
              />
            </div>
            <h6 className="text">Botson</h6>
            <p className="text-justify mx-auto ml-auto p-4 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              massa a est pulvinar hendrerit. Ut porttitor nunc at ante
              pharetra, sit amet fermentum elit eleifend. Duis at pretium erat.
              Fusce eu nulla lacus. Suspendisse et tincidunt lacus, id
              ullamcorper neque. Quisque ultricies lectus erat, in tincidunt
              sapien dignissim quis. Fusce vehicula dolor sed vehicula eleifend.
              Curabitur sed libero tortor. Duis ornare, diam eget semper
              aliquet, sem elit condimentum velit, sed ultrices sem ipsum eu
              nulla. Cras dui libero, viverra sed diam dignissim, cursus
              venenatis urna. Etiam ultrices tincidunt ipsum quis pellentesque.
              Duis at rhoncus massa. Ut ut sapien sed est efficitur rhoncus.
              Vivamus sit amet orci maximus, consectetur eros ut, mollis lorem.
              Etiam tincidunt sed arcu suscipit maximus.
            </p>
          </div>
          <div style={Events.CARD_STYLE} id="third">
            <div>
              <img
                src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                alt="test"
              />
            </div>
            <h6 className="text">Botson</h6>
            <p className="text-justify mx-5 ml-2 p-4 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              massa a est pulvinar hendrerit. Ut porttitor nunc at ante
              pharetra, sit amet fermentum elit eleifend. Duis at pretium erat.
              Fusce eu nulla lacus. Suspendisse et tincidunt lacus, id
              ullamcorper neque. Quisque ultricies lectus erat, in tincidunt
              sapien dignissim quis. Fusce vehicula dolor sed vehicula eleifend.
              Curabitur sed libero tortor. Duis ornare, diam eget semper
              aliquet, sem elit condimentum velit, sed ultrices sem ipsum eu
              nulla. Cras dui libero, viverra sed diam dignissim, cursus
              venenatis urna. Etiam ultrices tincidunt ipsum quis pellentesque.
              Duis at rhoncus massa. Ut ut sapien sed est efficitur rhoncus.
              Vivamus sit amet orci maximus, consectetur eros ut, mollis lorem.
              Etiam tincidunt sed arcu suscipit maximus.
            </p>
          </div>
          <div style={Events.CARD_STYLE} id="fourth">
            <div>
              <img
                src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                alt="test"
              />
            </div>
            <h6 className="text">Botson</h6>
            <p className="text-justify mx-5 ml-2 p-4 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              massa a est pulvinar hendrerit. Ut porttitor nunc at ante
              pharetra, sit amet fermentum elit eleifend. Duis at pretium erat.
              Fusce eu nulla lacus. Suspendisse et tincidunt lacus, id
              ullamcorper neque. Quisque ultricies lectus erat, in tincidunt
              sapien dignissim quis. Fusce vehicula dolor sed vehicula eleifend.
              Curabitur sed libero tortor. Duis ornare, diam eget semper
              aliquet, sem elit condimentum velit, sed ultrices sem ipsum eu
              nulla. Cras dui libero, viverra sed diam dignissim, cursus
              venenatis urna. Etiam ultrices tincidunt ipsum quis pellentesque.
              Duis at rhoncus massa. Ut ut sapien sed est efficitur rhoncus.
              Vivamus sit amet orci maximus, consectetur eros ut, mollis lorem.
              Etiam tincidunt sed arcu suscipit maximus.
            </p>
          </div>
          <div style={Events.CARD_STYLE} id="fifth">
            <div>
              <img
                src="https://images.unsplash.com/photo-1628438273202-a26e785d044f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                alt="test"
              />
            </div>
            <h6 className="text">Botson</h6>
            <p className="text-justify mx-5 ml-2 p-4 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              massa a est pulvinar hendrerit. Ut porttitor nunc at ante
              pharetra, sit amet fermentum elit eleifend. Duis at pretium erat.
              Fusce eu nulla lacus. Suspendisse et tincidunt lacus, id
              ullamcorper neque. Quisque ultricies lectus erat, in tincidunt
              sapien dignissim quis. Fusce vehicula dolor sed vehicula eleifend.
              Curabitur sed libero tortor. Duis ornare, diam eget semper
              aliquet, sem elit condimentum velit, sed ultrices sem ipsum eu
              nulla. Cras dui libero, viverra sed diam dignissim, cursus
              venenatis urna. Etiam ultrices tincidunt ipsum quis pellentesque.
              Duis at rhoncus massa. Ut ut sapien sed est efficitur rhoncus.
              Vivamus sit amet orci maximus, consectetur eros ut, mollis lorem.
              Etiam tincidunt sed arcu suscipit maximus.
            </p>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default Events;
