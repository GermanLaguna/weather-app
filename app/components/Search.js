var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: ''
		};
	}

	handleChange = (event) => {
		var value = event.target.value;

		this.setState(function () {
			return {
				city: value
			}
		});
	}

	render() {
		return (
			<div className={this.props.mode}>
				<input
					className="city"
					placeholder='St. George, Utah'
					type='text'
					value={this.state.city}
					autoComplete='off'
					onChange={this.handleChange}
				/>
				<p>
					<Link
						className='btn btn-success btn-space'
						to={ {
							pathname: '/forecast',
							search: '?city=' + this.state.city
						} }
					>
						GetWeather
					</Link>
				</p>
			</div>
		)
	}
}

Search.propTypes = {
	mode: PropTypes.string.isRequired,
};

module.exports = Search;
