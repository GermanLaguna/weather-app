var React = require('react');
var Link = require('react-router-dom').Link;

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
			<header className="header">
				<Link
					className="header-title"
					title="Go to Home"
					to= '/'
				>
					<h1>Clever Title</h1>
				</Link>
				<div className="search search-box">
					<City
						city={city}
						onChange={this.handleChange}
					/>
					<Consult
						city={city}
					/>
				</div>
			</header>
		)
	}
}

module.exports = Header;
