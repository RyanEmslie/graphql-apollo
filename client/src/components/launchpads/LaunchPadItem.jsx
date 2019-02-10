// Functional component
// Displays LAUNCHES_QUERY

import React from "react";
import { Link } from "react-router-dom";

export default function LaunchPadItem({
	launchPads: { site_id, site_name_long }
}) {
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-9">
					<h5>{site_name_long}</h5>
				</div>
				<div className="col-md-3">
					<Link to={`launchpads/${site_id}`} className="btn btn-secondary">
						Launch Pad Map
					</Link>
				</div>
			</div>
		</div>
	);
}
