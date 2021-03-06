var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Header = require('./Header');
var Home = require('./Home');
var Forecast = require('./Forecast');
var Details = require('./Details');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/forecast' component={Forecast} />
						<Route path='/details' component={Details} />
						<Route path='/NotFound' component={Details} />
						<Route
						render = {
							function () {
								return <p>Not Found</p>
							}
						}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;
