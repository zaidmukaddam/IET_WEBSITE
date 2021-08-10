import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/events.scss";

const Events = () => {
  return(
  <div className="container-fluid my-5" id="eventContainer">
    <div className="container-xl">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>   
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/london.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>London</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/new-york.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>New York</h4>
                      <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>				
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/paris.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>Paris</h4>
                      <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>					
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/kuala-lumpur.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>Kuala Lumpur</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/agra.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>Agra</h4>
                      <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/dubai.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>Dubai</h4>
                      <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>					
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/rio-de-janeiro.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="thumb-content">
                      <h4>Rio De Janeiro</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/giza.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="thumb-content">
                      <h4>Giza</h4>
                      <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src="/examples/images/cities/sydney.png" className="img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                      <h4>Sydney</h4>
                      <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                      <a href="/" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
                    </div>						
                  </div>					
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="/myCarousel" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="/myCarousel" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Events;
