/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TypedReactHooksDemo from "./animation.js";
import 'boxicons';
import "../css/header.css";
import "tilt.js";
import Tilt from 'react-tilt';
import iet_logo from "../images/IET_LOGO.png";



const Header = () => {
    return (
        <div className="container-fluid" id="container">
                    <div className="row align-items-center">                            
                <div className="col-sm-12 col-md-6 col-lg-6 align-items-center">
                    <div id="typist">
                       {/*  <box-icon name="quote" id="quote" color="black" size="100px"></box-icon>  */}
                        <TypedReactHooksDemo />
                    </div>
                    <div className="quote-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

                    </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 align-items-center text-center">
                            <div id="tiltjs" className="align-items-center text-center">
                                <Tilt className="Tilt align-items-center" options={{ max : 50}} style={{ height: 250, width: 250 }}>
                                    <div className="Tilt-inner"> 
                                 {/* <img src={iet_logo} alt="iet-logo" className="h-100 w-100"/> */}
                            {/*      <Tilt className="Tilt" options={{ max : 25}} style={{ height: 50, width: 50 }}>
                                        
                                    </Tilt> */}
                                    IET
                                    </div>
                                    
                                </Tilt>
                            </div>
                        </div>    
                    </div>      
        </div>
    )    
};

export default Header;