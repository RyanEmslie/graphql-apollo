import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../App.css";

class LaunchPadMap extends Component {
	render() {
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
