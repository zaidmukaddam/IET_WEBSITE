import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/events.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "boxicons";
import "./tinglejs.js";

const Events = () => {
  // AOS.refresh({ useClassNames: true,once: false, });
  return (
    <div
      // data-aos="fade-left"
      className="container-fluid my-5"
      id="eventContainer"
    >
      <div className="row">
        <div className="container-fluid my-2">
          <h3 className="text-center center-square">Events</h3>
          {/* <hr /> */}
        </div>
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="0"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-sm-3 py-5">
                        <div className="thumb-wrapper" id="card1">
                          <div className="img-box">
                            <img
                              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              className="img-fluid mx-auto d-block"
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>London</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam eu sem tempor, varius quam.
                            </p>
                            <button className="js-tingle-modal-4 btn btn-primary">
                              More <i className="fa fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 py-5">
                        <div className="thumb-wrapper" id="card2">
                          <div className="img-box">
                            <img
                              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>New York</h4>
                            <p>
                              Vivamus fermentum in arcu in aliquam. Quisque
                              aliqua porta odio in fringilla vivamus.
                            </p>
                            <a href="/" className="btn btn-primary">
                              More <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 py-5">
                        <div className="thumb-wrapper" id="card3">
                          <div className="img-box">
                            <img
                              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>Paris</h4>
                            <p>
                              Convallis eget pretium eu, bibendum non leo. Proin
                              susc ipit purus adipiscing dolor.
                            </p>
                            <a href="/" className="btn btn-primary">
                              More <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 py-5">
                        <div className="thumb-wrapper" id="card4">
                          <div className="img-box">
                            <img
                              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>Kuala Lumpur</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam eu sem tempor, varius quam.
                            </p>
                            <a href="/" className="btn btn-primary">
                              More <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <box-icon name="left-arrow" type="solid"></box-icon>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <box-icon name="right-arrow" type="solid"></box-icon>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
