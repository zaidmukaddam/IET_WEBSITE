import "../css/navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import iet_logo from "../images/IET_LOGO.png";
import "boxicons";

const NavBar = () => {
/*   window.addEventListener("load", () => {
    window.addEventListener("scroll", (e) => {
      console.log("scrolling");
    });
  });
 */
  return (
    <nav className="navbar navbar-expand-sm fixed-top" id="Navbar">
      <div className="container-fluid mx-3">
        {/*! Fix the icon  */}
        <a href="/" className="navbar-brand">
          <img
            src={iet_logo}
            className="image-fluid"
            alt="iet-logo"
            // width="3%"
            // height="3%"
          />
        </a>
        <button className="btn ml-auto mx-3" id="btn">
          Contact Us
        </button>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <box-icon name="menu" color="black" crossOrigin></box-icon>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link   mx-1 my-auto">
              About
            </a>
            <a href="/" className="nav-item nav-link mx-1 my-auto">
              Events
            </a>
            <a href="/" className="nav-item nav-link mx-1 my-auto">
              Hack n' Code
            </a>
            <a href="/" className="nav-item nav-link mx-1 my-auto">
              Gallery
            </a>
            <a href="/" className="nav-item nav-link  mx-1 my-auto">
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
