// @flow

import React from "react";
import { Navbar, FormGroup, FormControl, Image } from "react-bootstrap";

import TMDBlogo from "../images/movie_logo.svg";

const logoImg = {
	height: "150%",
	width: "auto",
	paddingBottom: "10px",
	paddingTop: "10px",
	marginTop: "-8px",
	display: "inline-block"
};
const Header = () => (
	<Navbar bsStyle="inverse">
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#home">
					<Image style={logoImg} src={TMDBlogo} />
				</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Navbar.Form pullRight>
			<FormGroup>
				<FormControl type="text" placeholder="Search Movie by ID" />
			</FormGroup>{" "}
		</Navbar.Form>
	</Navbar>
);

export default Header;