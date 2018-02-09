import React, { Component } from "react";
import axios from "axios";
import ModalVideo from "react-modal-video";
import { Glyphicon } from "react-bootstrap";
import { API_KEY, VIDEO_LINK } from "../const";

/* eslint-disable */

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
          <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId='xs-1234315'
          onClose={() => this.setState({ isOpen: false })}
        />  
    );
  }
}

export default Modal;