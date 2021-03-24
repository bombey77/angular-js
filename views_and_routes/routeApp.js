var myRouteApp = angular.module('myRouteApp', ['ngRoute']);

myRouteApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/info', {
            templateUrl: '../views_and_routes/views/info.html'
        })
        .when('/users', {
            templateUrl: '../views_and_routes/views/users.html',
            controller: 'routeController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

myRouteApp.controller('routeController', ['$scope', function ($scope) {
    $scope.users = [
        {
            name: 'Roman',
            age: 33,
            salary: 1200
        },
        {
            name: 'Kathy',
            age: 29,
            salary: 700
        },
        {
            name: 'Hurry',
            age: 21,
            salary: 520
        }];
}]);
