var myApp = angular.module('myApp', []);

myApp.controller('myUserController', ['$scope', function($scope) {
    $scope.users = ['Roman', 'Kathy', 'Lucy'];
}]);
