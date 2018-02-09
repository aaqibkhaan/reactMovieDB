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
      videoID: ""
    };
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    const id = this.props.modal;
    const url = `${VIDEO_LINK}${id}/videos${API_KEY}`;
    axios.get(url).then(response => {
      this.setState({ videoID: response.data.results[0].key });
    });
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    let videoID;
    if (this.state.videoID !== "") {
      videoID = this.state.videoID;
    }

    return (
      <div className="play-list">
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={videoID}
          onClose={() => this.setState({ isOpen: false })}
        />
        <li className="col-m-4" onClick={this.openModal}>
          <Glyphicon className="green" glyph="play" /> Play Trailer
        </li>
      </div>
    );
  }
}

export default Modal;