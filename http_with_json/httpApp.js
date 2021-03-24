var httpApp = angular.module('httpApp', []);

httpApp.controller('httpController', ['$scope', '$http', function ($scope, $http) {

    $http.get('../http/json/users.json').then(function (response) {
        $scope.users = response.data;
    });
}]);
