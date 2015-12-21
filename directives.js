// Directives
weatherApp.directive('weatherReport', function() {
    return {
        restrict: 'E', // HTML element
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        // isolate the scope
        scope: {
            weatherDay: '=', // object
            convertToStandard: '&', // function
            convertToDate: '&', // function
            dateFormat: '@' // text
        }
    }
});