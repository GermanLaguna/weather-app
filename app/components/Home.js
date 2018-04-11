var React = require('react');

var Search = require('./Search');

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
				<Search mode="search search-column" />
			</section>
		)
	}
}

module.exports = Home;
