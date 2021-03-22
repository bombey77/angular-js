var submitApp = angular.module('submitApp', []);

submitApp.controller('submitController', ['$scope', function($scope) {
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

    $scope.addUser = function() {
        $scope.users.push({
           name: $scope.usr.name,
           age: parseInt($scope.usr.age),
           salary: $scope.usr.salary,
        });
        this.clearInputForm();
    }

    $scope.clearInputForm = function () {
        $scope.usr.name = '',
        $scope.usr.age = '',
        $scope.usr.salary = ''
    }
}]);
