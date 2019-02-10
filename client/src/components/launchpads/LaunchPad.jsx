import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import gql from "graphql-tag";

import LaunchPadMap from "../LaunchPadMap";

// A JavaScript template literal tag that parses GraphQL query strings
//! Note use of argument - define type!
const LAUNCHPADSLOCATION_QUERY = gql`
	query LaunchPadsLocationQuery($site_id: String!) {
		launchPadsLocation(site_id: $site_id) {
			site_id
			status
			site_name_long
			location {
				name
				latitude
				longitude
			}
		}
	}
`;

class LaunchPad extends Component {
	render() {
		let { site_id } = this.props.match.params;

		return (
			//* Further investigate using Fragments vs div
			<Fragment>
				<Query query={LAUNCHPADSLOCATION_QUERY} variables={{ site_id }}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);

						const {
							location: { name, latitude, longitude }
						} = data.launchPadsLocation;
						return (
							<div>
								<h1 className="display-4 my-3">{name}</h1>
								<div className="card card-body mb-1">
									<LaunchPadMap lat={latitude} lng={longitude} />
								</div>
								<hr />
								<Link to="/launchpads" className="btn btn-secondary">
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

export default LaunchPad;
