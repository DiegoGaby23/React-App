let React = require('react');
let createReactClass = require('create-react-class');
let $ = require('jquery');
let ArtistCollection = require('./ArtistCollection.react');

let Application = createReactClass({

	getInitialState: function () {

		return {
			artistName: '',
			artists: [],
		};
	},

	updateArtistName: function (evt) {

		this.setState({
			artistName: evt.target.value
		});
	},

	handleSearchArtist: function () {

		let artistName = this.state.artistName;
		console.log("handleSearchArtist, artist name: ", artistName);

		let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=" + artistName;
		let that = this;
		$.ajax({
			url: url,
			success: function (result) {
				console.log("result: ", result);

				let artists = result.data;
				console.log("artists: ", artists);
				that.setState({
					artists: artists
				});
			}
		});
	},

	render: function () {

		return (
			<div>
				<input type="text" placeholder="Saisir l'artiste à rechercher..." size="40"
					value={this.state.artistName} onChange={this.updateArtistName}></input>
				<button onClick={this.handleSearchArtist}>Chercher</button>
				<ArtistCollection artists={this.state.artists} />
			</div>
		);
	}

});

module.exports = Application;