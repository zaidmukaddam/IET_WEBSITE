import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import "boxicons";
import "../css/about.css";

const About = () => {
  return (
    <div className="container-fluid" id="aboutContainer">
      <div className="card-deck mb-3 mx-5 px-5 text-center">
        <div className="card mb-4">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <small>What is IET</small>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <small>More About Us</small>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  );
};

export default About;
