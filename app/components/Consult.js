var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;


class Consult extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p>
				<Link
				className='btn btn-success btn-space'
				to={ {
					pathname: '/forecast',
					search: '?city=' + this.props.city
				} }
				>
					GetWeather
				</Link>
			</p>
		)
	}
}

Consult.propTypes = {
	city: PropTypes.string.isRequired,
};

module.exports = Consult;
