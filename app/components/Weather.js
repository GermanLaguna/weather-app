var React = require('react');
var Link = require('react-router-dom').Link;

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

function Wheater(props) {
	return (
		<div className="forecast-container">
		{ props.forecast.map(function (forecast, index) {
			var day = getDate(index);
			return (
				<Link
					title={"Get Detail for "+day}
					to={ {
						pathname: '/details/' + props.city,
						state: { city: props.city, day: day, forecast: forecast }
					} }
					key={index}
					className="dayContainer"
				>
					<img className="weather" src={"https://res.cloudinary.com/glwdev/image/upload/v1523383448/weather-app/images/weather-icons/" + forecast.weather[0].icon + ".svg"} alt={"Weather "+day}/>
					<h3 className="subheader">{day}</h3>
				</Link>
			)
		})
	}
	</div>
)
}

module.exports = Wheater;
