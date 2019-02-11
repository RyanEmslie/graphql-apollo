import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import About from "./components/About";
import Launches from "./components/launches/Launches";
import Launch from "./components/launches/Launch";
import LaunchPads from "./components/launchpads/LaunchPads";
import LaunchPad from "./components/launchpads/LaunchPad";
import Roadster from "./components/roadster/Roadster";

// import logo from "./logo.png";
import "./App.css";

// Creates Apollo Client on localhost 50000
const client = new ApolloClient({
	uri: "/graphql"
});

class App extends Component {
	render() {
		return (
			// Outermost  wrapper of render elements
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
						<AppNavbar />
						<Route exact path="/" component={About} />
						<Route exact path="/launches" component={Launches} />
						<Route
							exact
							path="/launches/launch/:flight_number"
							component={Launch}
						/>
						<Route exact path="/launchpads" component={LaunchPads} />
						<Route exact path="/launchpads/:site_id" component={LaunchPad} />
						<Route exact path="/roadster" component={Roadster} />
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
