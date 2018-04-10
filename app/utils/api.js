var axios = require('axios');

module.exports = {
    fetchForecast: function (city) {
        var apikey = 'b714ec74bbab5650795063cb0fdf5fbe';
        var encodedURI = window.encodeURI('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + apikey + '&cnt=5');

        return axios.get(encodedURI)
        .then(function (response) {
            return response.data;
        });
    }
};
