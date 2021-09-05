import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/modalb4.scss";

const Modal = () => {
  return (
    <div>
      <div className="modal fade" id="myModal1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">BOTSON</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                  <h1>What is Botson?</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut ad aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>

                <div className="col-lg-12 col-sm-12 col-md-12 text-center my-5">
                  <h2>Insert another heading here</h2>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal2">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal3">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal4">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
