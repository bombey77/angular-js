var customDirectiveApp = angular.module('customDirectiveApp', []);

customDirectiveApp.controller('customController', ['$scope', $scope => {
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

customDirectiveApp.directive('customUsers', [() => {
    return {
        restrict: 'E',
        scope: {
            users: '='
        },
        replace: true,
        templateUrl: '../replace/custom_users.html',
        controller: $scope => {
            $scope.index = 1;
        }
    }
}]);
