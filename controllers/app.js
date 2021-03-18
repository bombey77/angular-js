var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.message = 'some text';
}]);

myApp.controller('myRepeatController', ['$scope', function ($scope) {
    $scope.names = ['Roman', 'Kathy', 'Hurry'];
}]);

