// import React, { useState, Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// class Modals extends Component {
//   //   constructor(props) {
//   //     super(props);

//   //     this.state = {
//   //       count: props.count || 0,
//   //       visible: false,
//   //     };

//   //     this.onClick = this.onClick.bind(this);
//   //   }

//   state = {
//     visible: false,
//   };
//   //   showModal = () => {
//   //     this.setState({
//   //       visible: true,
//   //     });
//   //   };

//   onClick = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   render() {
//     const { visible } = this.state;
//     return (
//       <div>
//         <Button color="danger" onClick={this.onClick}>
//           Click
//         </Button>
//         <Modal visible={visible}>
//           <ModalHeader>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           </ModalBody>
//           <ModalFooter>footer</ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Modals;

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modals = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //   const closeBtn = (
  //     <button className="close" onClick={toggle}>
  //       &times;
  //     </button>
  //   );

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Test
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}

      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade mt-9"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body mt-1">
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Lastname"
                />
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Tel"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
