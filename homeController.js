// homeController
weatherApp.controller('homeController', ['$scope', '$location', 'cityService',
    function ($scope, $location, cityService) {

        $scope.city = cityService.city;

        // watch the value for 'city' as it may change on the home page (text box)
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.submit = function() {
            $location.path('/forecast');
        }
        ;
    }]);