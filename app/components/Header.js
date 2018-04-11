var React = require('react');

var City = require('./City');
var Consult = require('./Consult');

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(city) {
		this.setState(function () {
			return {
				city: city
			}
		});
	}

	render() {
		var city = this.state.city;

		return (
			<div className="header">
			<h1>Clever Title</h1>
			<div className="search search-box">
			<City
			city={city}
			onChange={this.handleChange}
			/>
			<Consult
			city={city}
			/>
			</div>
			</div>
		)
	}
}

module.exports = Header;
