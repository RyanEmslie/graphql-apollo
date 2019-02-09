import React, { Component } from "react";
// import { NavLink } from 'react-router-dom'

import {
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Container,
	Collapse
} from "reactstrap";

import logo from "../logo.png";

class AppNavbar extends Component {
	// Component level state - toggles hamburger on Navbar
	state = {
		isOpen: false
	};
	// toggles collapse
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	// opens form || closes form
	showForm = () => {
		try {
			let temp = document.querySelector(".my-form");
			if (temp.className.match(/\bhidden\b/)) {
				temp.classList.remove("hidden");
			} else {
				temp.classList.add("hidden");
			}
		} catch {
			return;
		}
	};

	render() {
		return (
			<div className="app-navbar">
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						{/* <NavbarBrand id="emslie-logo">Emslie Checkin App</NavbarBrand> */}
						<NavbarBrand id="emslie-logo">
							<img
								src={logo}
								alt="SpaceX"
								style={{ width: 300, display: "block", margin: "auto" }}
							/>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="launches">Launches</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="launchpads">Launch Pads</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;
