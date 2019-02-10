import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import "../../App.css";

// A JavaScript template literal tag that parses GraphQL query strings
const ROADSTER_QUERY = gql`
	query RoadsterQuery {
		roadster {
			name
			details
			speed_mph
			earth_distance_mi
			mars_distance_mi
		}
	}
`;

class Roadster extends Component {
	render() {
		let { site_id } = this.props.match.params;

		return (
			//* Further investigate using Fragments vs div
			<Fragment>
				<Query query={ROADSTER_QUERY} variables={{ site_id }}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);

						const {
							name,
							details,
							speed_mph,
							earth_distance_mi,
							mars_distance_mi
						} = data.roadster;
						return (
							<div>
								<h1 className="display-4 my-3">
									{/* <span className="text-dark">Launch Pad:</span>  */}
									{name}
								</h1>
								{/* <h4 className="mb-3">Launch Pad Map</h4> */}
								<div className="card card-body mb-1">
									<h5>{details}</h5>
								</div>
								{/* <div className="card card-body mb-1"> */}
								<div className="card card-body mb-1">
									<Row>
										<Col className="col-md-4">
											<h5>
												<span style={{ color: "rgb(252,105,105)" }}>
													Roaster's Current Speed{" "}
												</span>
												{Math.ceil(speed_mph)} mph
											</h5>
										</Col>
										<Col className="col-md-4">
											<h5>
												<span style={{ color: "rgb(155,155,255)" }}>
													Distance from Earth
												</span>{" "}
												{Math.ceil(earth_distance_mi)} mi
											</h5>
										</Col>
										<Col className="col-md-4">
											<h5>
												<span style={{ color: "rgb(251,132,0)" }}>
													Distance from Mars
												</span>{" "}
												{Math.ceil(mars_distance_mi)} mi
											</h5>
										</Col>
									</Row>
								</div>

								<hr />
								<Link to="/" className="btn btn-secondary">
									Back
								</Link>
							</div>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default Roadster;
