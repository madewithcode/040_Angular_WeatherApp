// Services
weatherApp.service('cityService', function () {
    this.city = 'New York, NY';
});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {

        // make api call. doing it this way will also prevent the CORS errors.
        // example: http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&APPID=2a76523ae46789c184a204e0d5ec5101
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2a76523ae46789c184a204e0d5ec5101',
            {
                callback: 'JSON_CALLBACK'
            },
            {
                get: {
                    method: 'JSONP'
                }
            }
        );

        return weatherAPI.get(
            {
                q: city,
                cnt: days
            }
        );

    };

}]);