var validationApp = angular.module('validationApp', ['ngRoute']);

validationApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/user-success', {
            templateUrl: '../validation/user-success.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

validationApp.controller('validationController', ['$scope', '$location', function ($scope, $location) {
    $scope.loginUser = function (user) {
        $location.path('/user-success');
    }
}]);
