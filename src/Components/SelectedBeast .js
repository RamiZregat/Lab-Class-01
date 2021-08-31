import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.handleshow} onHide={this.props.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <div><img src={this.props.src} alt={this.props.alt}/></div>
          <Modal.Body>{this.props.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose} >
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
