import '../css/navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'boxicons';

const NavBar = () => {
   
      return (
    // Navbar section
    <nav className="navbar navbar-expand-sm fixed-top" id="Navbar">
      <div className="container my-2 ">
      {/*   <a
          href="/"
              className="navbar-brand"
            
        >
          <img src={iet_logo} className="image-fluid" alt="iet-logo" />
        </a> */}
        <button className="btn ml-auto mx-3" id="btn">
          Contact Us
        </button>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          {/* <span className="fas fa-bars text-light"></span> */}
          <box-icon name="menu" color="black"></box-icon>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a
              href="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              About
            </a>
            <a
              href="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Events
            </a>
             <a
              href="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Hack n' Code
                </a>
             <a
              href="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Gallery
            </a>
             <a
              href="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;