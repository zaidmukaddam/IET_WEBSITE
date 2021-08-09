import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/footer.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="container-fluid" id="footerBackground">
      <div
        className="container-fluid text-center align-items-center"
        id="footer"
      >
        <div className="container text-center align-items-center">
          <span className="my-2" id="footerHeading">IET MPSTME ON CAMPUS</span>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 text-center align-itmes-center my-4">
            <h5 className="text-dark pb-2">
              <b>More Links</b>
            </h5>
            <a href="/" className="text-dark d-block pb-2">
              Events
            </a>
            <a href="/" className="text-dark d-block pb-2">
              Home
            </a>
            <a href="/" className="text-dark d-block pb-2">
              Contact Us
            </a>
          </div>
          <div className="col-12 col-md-4 text-dark text-justify py-3 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            ad aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="col-12 col-md-4 text-center align-itmes-center my-4">
            <h5 className="text-dark pb-2">
              <b>Social</b>
            </h5>
            {/* ! Import correct logos */}
          </div>
        </div>

        <div className="text-dark py-5 text-center">
          Copyright © IET MPSTME on Campus {year}
        </div>
      </div>
      <div className="footerGradient"></div>
    </div>
  );
};

export default Footer;
