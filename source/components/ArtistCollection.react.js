let React = require('react');
let createReactClass = require('create-react-class');

let ArtistCollection = createReactClass({

	getInitialState: function () {
		return {
		};
	},

	render: function () {
		return (
			<ul>
				{this.props.artists.map(function (artist, i) {
					console.log("artist: ", artist, ", i: ", i);
					return (
						<li key={i}>{artist.name}</li>
					);
				})}
			</ul>
		);
	}

});

module.exports = ArtistCollection;