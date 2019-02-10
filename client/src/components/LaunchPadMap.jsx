import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// import FormModal from "./FormModal";
// import Form from "./Form";

// import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class LaunchPadMap extends Component {
	// Component initial state to setup map
	// state = {
	// 	location: {
	// 		lat: 29.649913,
	// 		lng: -82.348788
	// 	},
	// 	zoom: 8,
	// 	hasLocation: false
	// }; // end state

	render() {
		console.log(this.props.lat);
		// const position = [this.state.location.lat, this.state.location.lng];
		const position = [this.props.lat, this.props.lng];
		return (
			<div>
				<Map className="map" center={position} zoom={8}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					<Marker position={position}>
						<Popup>
							<button>Enter Location</button>
						</Popup>
					</Marker>
				</Map>
			</div>
		);
	} // end render
} // end MainMap class

export default LaunchPadMap;
