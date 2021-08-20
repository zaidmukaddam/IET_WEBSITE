import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/modalb4.scss";

const Modal = () => {
  return (
    <div>
      <div class="modal fade" id="myModal1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal2">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal3">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal4">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
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
