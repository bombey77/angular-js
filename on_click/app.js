var myApp = angular.module('myApp', []);

myApp.controller('onClickController', ['$scope', function($scope) {
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

    $scope.removeUser = function(user) {
        const index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    }
}]);
