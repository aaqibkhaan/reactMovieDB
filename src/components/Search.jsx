import React, { Component } from "react";
import { Navbar, Image } from 'react-bootstrap/lib'
import TMDBlogo from "../images/movie_logo.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  render() {
    return (
      <Navbar bsStyle="inverse">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <span>Brand</span>
              <Image src={TMDBlogo} />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
        <input />
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default Search;