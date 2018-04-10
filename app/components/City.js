var React = require('react');
var PropTypes = require('prop-types');

class City extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: this.props.city
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                city: value
            }
        });

        this.props.onChange(
            this.state.city
        );
    }

    render() {
        return (
            <input
                className="city"
                placeholder='St. George, Utah'
                type='text'
                value={this.state.city}
                autoComplete='off'
                onChange={this.handleChange}
            />
        )
    }
}

City.propTypes = {
    city: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

module.exports = City;
