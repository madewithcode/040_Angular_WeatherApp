// forecastController



weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
    function ($scope, $resource, $routeParams, cityService) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2'; // default to 2

        // make api call. doing it this way will also prevent the CORS errors.
        // example: http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&APPID=2a76523ae46789c184a204e0d5ec5101
        $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2a76523ae46789c184a204e0d5ec5101',
            {
                callback: 'JSON_CALLBACK'
            },
            {
                get: {
                    method: 'JSONP'
                }
            }
        );

        $scope.weatherResult = $scope.weatherAPI.get(
            {
                q: $scope.city,
                cnt: $scope.days
            }
        );

        $scope.convertToF = function (degK) {
            return Math.round(1.8 * (degK - 273) + 32);
        };

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };
    }]);