import React, { Component } from "react";
import styled from "styled-components";
import { Navbar } from 'react-bootstrap/lib'
import TMDBlogo from "../images/movie_logo.svg";

  const Brand = styled.span`
    fontWeight: bold;
    textTransform: caplitalize;
    paddingLeft: 10;
    fontSize: 1.2em;`;

  const Image = styled.img`
    height: 100%;
    width: auto;
    paddingLeft: 10px;
    marginTop: -8px;
    display: inline-block;`
  ;

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
            <Brand>{this.props.brand}</Brand>
              <Image alt = " " src={TMDBlogo}/>
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