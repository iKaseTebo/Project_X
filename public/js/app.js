var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('<<');
    $interpolateProvider.endSymbol('>>');
}]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/homepage/home.html',
        controller: 'mainController'
    })
}]);

//# sourceMappingURL=app.js.map
