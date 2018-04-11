var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');

var Loading = require('./Loading');

var api = require('../utils/api');

class Details extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var forecast = this.props.location.state.forecast;
		var city = this.props.location.state.city;
		var day = this.props.location.state.day;

		return (
			<div>
				<div className="dayContainer">
					<img className="weather" src={"https://res.cloudinary.com/glwdev/image/upload/v1523383448/weather-app/images/weather-icons/" + forecast.weather[0].icon + ".svg"} alt="Weather"/>
					<h2 className="subheader">{day}</h2>
				</div>
				<div className="description-container">
					<p>{city}</p>
					<p>{forecast.weather[0].description}</p>
					<p>min temp: {forecast.temp.min} degrees</p>
					<p>max temp: {forecast.temp.max}  degrees</p>
					<p>humidity: {forecast.humidity} </p>
				</div>
			</div>
		)
	}
}

module.exports = Details;
