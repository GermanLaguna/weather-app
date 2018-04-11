var React = require('react');
var Link = require('react-router-dom').Link;

class Wheater extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var city = this.props.city;

		function getDate(index) {
			var date = new Date();
			date.setDate(date.getDate() + index);
			var day = date.getDate();

			var month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			var name_month = month[date.getMonth()];

			var weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
			var name_day = weekday[date.getDay()];

			return name_day + ', ' + name_month + ' ' + day;
		}

		return (
			<div className="forecast-container">
			{ this.props.forecast.map(function (forecast, index) {
				var day = getDate(index);
				return (
					<Link
						to={ {
							pathname: '/details/' + city,
							state: { city: city, day: day, forecast: forecast }
						} }
						key={index}
						className="dayContainer"
					>
						<img className="weather" src={"https://res.cloudinary.com/glwdev/image/upload/v1523383448/weather-app/images/weather-icons/" + forecast.weather[0].icon + ".svg"} alt="Weather"/>
						<h2 className="subheader">{day}</h2>
					</Link>
				)
			})
		}
		</div>
	)
}
}

module.exports = Wheater;
