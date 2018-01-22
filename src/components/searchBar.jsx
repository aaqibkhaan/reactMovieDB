import React from "react";
import { Navbar , FormGroup , FormControl  } from 'react-bootstrap';

const searchBar = () => (
    <Navbar bsStyle='inverse'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">I am a Brand</a>
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