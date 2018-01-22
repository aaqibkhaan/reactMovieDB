import React from "react";
import { Navbar , FormGroup , FormControl, Image  } from 'react-bootstrap';
import TMDBlogo from '../images/movie_logo.svg'

  const imgStyle = {
    height: '200%',
    width: 'auto',
    paddingLeft: '10px',
    marginTop: '-8px',
    display: 'inline-block'
  }
const searchBar = () => (
    <Navbar bsStyle='inverse'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"><Image style={imgStyle} src={TMDBlogo}/></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
      				<FormGroup>
					<FormControl type="text" placeholder="Search" />
				</FormGroup>{' '}
      </Navbar.Form>
    </Navbar>
);

export default searchBar;