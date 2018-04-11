var React = require('react');
var queryString = require('query-string');

var NotFound = require('./NotFound');
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

		api.fetchForecast(city.city)
		.then(function (forecast) {
			console.log(forecast);
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

	render() {
		const { state: { forecast, name, loading, error } } = this;

		if (error) {
			return <NotFound />
		}
		else if (loading) {
			return <Loading />
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
