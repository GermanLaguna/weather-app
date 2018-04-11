var React = require('react');
var queryString = require('query-string');

var Home = require('./Home');
var Loading = require('./Loading');
var Wheater = require('./Weather');

var api = require('../utils/api');

class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			forecast: null,
			name: null,
			loading: true,
			error: false,
		}
	}

	componentDidMount() {
		var city = queryString.parse(this.props.location.search);
		if (city.city !== '') {
			api.fetchForecast(city.city)
			.then(function (forecast) {
				if (forecast !== undefined) {
					this.setState(function () {
						return {
							forecast: forecast.list,
							name: forecast.city.name,
							loading: false,
							error: false
						}
					});
				}
				else {
					this.setState(function () {
						return {
							forecast: null,
							name: '',
							loading: true,
							error: true
						}
					});
				}
			}.bind(this) );
		}
		else {
			this.setState(function () {
				return {
					forecast: null,
					name: '',
					loading: true,
					error: true
				}
			});
		}
	}

	render() {
		var forecast = this.state.forecast;
		var name = this.state.name;
		var loading = this.state.loading;
		var error = this.state.error;

		if (loading) {
			return <Loading />
		}
		else if (error) {
			return <Home />
		}

		return (
			<section>
				<h2 className="forecast-header">{name}</h2>
				<Wheater
					forecast={forecast}
					city={name}
				/>
			</section>
		)
	}
}

module.exports = Forecast;
