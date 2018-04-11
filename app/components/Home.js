var React = require('react');

var City = require('./City');
var Consult = require('./Consult');

class Home extends React.Component {
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
			<section className="home-container home-desing">
				<h2 className="title">Enter a City and State</h2>
				<div className="search search-column">
					<City
						city={city}
						onChange={this.handleChange}
					/>
					</div>
					<div>
						<Consult
						city={city}
					/>
				</div>
			</section>
		)
	}
}

module.exports = Home;
