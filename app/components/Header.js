var React = require('react');
var Link = require('react-router-dom').Link;

var Search = require('./Search');

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Link
					className="header-title"
					title="Go to Home"
					to= '/'
				>
					<h1>Clever Title</h1>
				</Link>
				<Search mode="search search-box" />
			</header>
		)
	}
}

module.exports = Header;
