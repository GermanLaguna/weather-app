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

	handleKeyPress = (event) => {
		if(event.key == 'Enter'){
			console.log(this);
		}
	}

	handleClick = (event) => {
		if(this.state.city === ''){
			event.preventDefault();
		}
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
					onKeyPress={this.handleKeyPress}
				/>
				<p>
					<Link
						className='btn btn-success btn-space'
						title="Get Weather"
						to={ {
							pathname: '/forecast',
							search: '?city=' + this.state.city
						} }
						onClick={this.handleClick}
					>
						Get Weather
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
