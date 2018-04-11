var React = require('react');
var Link = require('react-router-dom').Link;

class NotFound extends React.Component {
	render() {
		return (
			<section className="home-container home-desing">
				<h2 className="title">City Not Found</h2>
				<Link
					className='btn btn-success btn-space'
					title="Back to Home"
					to="/"
				>
					Back to Home
				</Link>
			</section>
		)
	}
}

module.exports = NotFound;
