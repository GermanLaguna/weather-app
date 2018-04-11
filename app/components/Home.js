var React = require('react');

var Search = require('./Search');

class Home extends React.Component {
	render() {
		return (
			<section className="home-container home-desing">
				<h2 className="title">Enter a City and State</h2>
				<Search mode="search search-column" />
			</section>
		)
	}
}

module.exports = Home;
