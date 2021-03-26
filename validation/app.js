var validationApp = angular.module('validationApp', []);

validationApp.controller('validationController', ['$scope', function($scope) {
    $scope.loginUser = function (user) {
        console.log(user);
    }
}]);
