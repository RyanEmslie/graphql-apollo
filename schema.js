const axios = require("axios");

const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema,
	GraphQLFloat
} = require("graphql");

// Launch Type
const LaunchType = new GraphQLObjectType({
	name: "Launch",
	fields: () => ({
		flight_number: { type: GraphQLInt },
		mission_name: { type: GraphQLString },
		launch_year: { type: GraphQLString },
		launch_date_local: { type: GraphQLString },
		launch_success: { type: GraphQLBoolean },
		// This provides access to nested Rocket values
		rocket: { type: RocketType }
	})
});

// Rocket Type
// Separate object need to access nested Rocket values
const RocketType = new GraphQLObjectType({
	name: "Rocket",
	fields: () => ({
		rocket_id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString }
	})
});

// Launch Pad Type
const LaunchPadsType = new GraphQLObjectType({
	name: "LaunchPads",
	fields: () => ({
		// id: { type: GraphQLInt },
		site_id: { type: GraphQLString },
		status: { type: GraphQLString },
		site_name_long: { type: GraphQLString },
		location: { type: LaunchPadsLocationType }
	})
});
// Nested
const LaunchPadsLocationType = new GraphQLObjectType({
	name: "LaunchPadsLocation",
	fields: () => ({
		name: { type: GraphQLString },
		latitude: { type: GraphQLFloat },
		longitude: { type: GraphQLFloat }
	})
});

// Roadster Type
const RoadsterType = new GraphQLObjectType({
	name: "Roadster",
	fields: () => ({
		name: { type: GraphQLString },
		details: { type: GraphQLString },
		speed_mph: { type: GraphQLFloat },
		earth_distance_mi: { type: GraphQLFloat },
		mars_distance_mi: { type: GraphQLFloat }
	})
});

// Root Query
// endpoints with resolvers
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		launches: {
			type: new GraphQLList(LaunchType),
			resolve(parent, args) {
				return axios
					.get("https://api.spacexdata.com/v3/launches")
					.then(res => res.data);
			}
		},
		launch: {
			type: LaunchType,
			args: {
				flight_number: { type: GraphQLInt }
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
					.then(res => res.data);
			}
		},
		rockets: {
			type: new GraphQLList(RocketType),
			resolve(parent, args) {
				return axios
					.get("https://api.spacexdata.com/v3/rockets")
					.then(res => res.data);
			}
		},
		rocket: {
			type: RocketType,
			args: {
				rocket_id: { type: GraphQLString }
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
					.then(res => res.data);
			}
		},
		launchPads: {
			type: new GraphQLList(LaunchPadsType),
			resolve(parent, args) {
				return axios
					.get("https://api.spacexdata.com/v3/launchpads")
					.then(res => res.data);
			}
		},
		launchPadsLocation: {
			type: LaunchPadsType,
			args: {
				site_id: { type: GraphQLString }
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launchpads/${args.site_id}`)
					.then(res => res.data);
			}
		},
		roadster: {
			type: RoadsterType,
			resolve(parent, args) {
				return axios
					.get("https://api.spacexdata.com/v3/roadster")
					.then(res => res.data);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
