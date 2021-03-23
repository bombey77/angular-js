var mySrcApp = angular.module('mySrcApp', []);

mySrcApp.controller('mySrcController', ['$scope', function($scope) {
    $scope.users = [
        {
            name: 'Roman',
            age: 33,
            salary: 1200,
            image: '../src/images/m1.png'
        },
        {
            name: 'Kathy',
            age: 29,
            salary: 700,
            image: '../src/images/m2.png'
        },
        {
            name: 'Hurry',
            age: 21,
            salary: 520,
            image: '../src/images/m3.png'
        },
        ,
        {
            name: 'Tom',
            age: 24,
            image: '../src/images/m3.png'
        }];
}]);
