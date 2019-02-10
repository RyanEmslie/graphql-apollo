import React, { Component } from "react";

import roadsterPic from "../roadster.png";

class About extends Component {
	render() {
		return (
			<div>
				<div>
					<img
						src={roadsterPic}
						alt="Elon's Roadster"
						style={{ width: 500, display: "block", margin: "auto" }}
					/>
				</div>
				<hr />

				<div className="card card-body mb-1">
					<h4>
						<p>
							Proof of concept App displaying SpaceX API data. The app was
							programmed using React / Apollo frontend with Express GraphQL
							Server backend.
						</p>
					</h4>
				</div>
				{/* <div className="card card-body mb-1">
					<h6>
						Ryan Emslie -{" "}
						<a href="https://github.com/RyanEmslie/graphql-apollo">
							Github Repo
						</a>{" "}
					</h6>
				</div> */}
				<h6>
					Ryan Emslie -{" "}
					<a href="https://github.com/RyanEmslie/graphql-apollo">Github Repo</a>{" "}
				</h6>
			</div>
		);
	}
}

export default About;
