import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchPadItem from "./LaunchPadItem";

// A JavaScript template literal tag that parses GraphQL
// query strings into the standard GraphQL AST
const LAUNCHPADS_QUERY = gql`
	query LaunchPadsQuery {
		launchPads {
			site_id
			status
			site_name_long
			location {
				name
			}
		}
	}
`;

class LaunchPads extends Component {
	render() {
		return (
			<Fragment>
				<h1 className="display-4 my-3">Launch Pads</h1>
				<Query query={LAUNCHPADS_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);
						console.log(data);

						return (
							<Fragment>
								{data.launchPads.map(launchpad => (
									<LaunchPadItem
										key={launchpad.site_id}
										launchPads={launchpad}
									/>
								))}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default LaunchPads;
