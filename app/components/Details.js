var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');

var Loading = require('./Loading');

var api = require('../utils/api');

function Details(props) {
	var forecast = props.location.state.forecast;
	var city = props.location.state.city;
	var day = props.location.state.day;

	return (
		<div>
			<section className="dayContainer">
				<img className="weather" src={"https://res.cloudinary.com/glwdev/image/upload/v1523383448/weather-app/images/weather-icons/" + forecast.weather[0].icon + ".svg"} alt="Weather"/>
				<h2 className="subheader">{day}</h2>
			</section>
			<section className="description-container">
				<h2>{city}</h2>
				<p>{forecast.weather[0].description}</p>
				<p>min temp: {forecast.temp.min} degrees</p>
				<p>max temp: {forecast.temp.max}  degrees</p>
				<p>humidity: {forecast.humidity} </p>
			</section>
		</div>
	)
}

module.exports = Details;
