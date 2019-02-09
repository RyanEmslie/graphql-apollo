import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import About from "./components/About";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import LaunchPads from "./components/LaunchPads";

// import logo from "./logo.png";
import "./App.css";

// Creates Apollo Client on localhost 50000
const client = new ApolloClient({
	uri: "http://localhost:5000/graphql"
});

class App extends Component {
	render() {
		return (
			// Outside wrapper of render elements
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
						{/* <img
							src={logo}
							alt="SpaceX"
							style={{ width: 300, display: "block", margin: "auto" }}
						/> */}
						<AppNavbar />
						<Route exact path="/" component={About} />
						<Route exact path="/launches" component={Launches} />
						<Route
							exact
							path="/launches/launch/:flight_number"
							component={Launch}
						/>
						<Route exact path="/launchpads" component={LaunchPads} />
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
