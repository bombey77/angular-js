var myApplication = angular.module('myApplication', []);

myApplication.controller('myController', ['$scope', function($scope) {
    $scope.users = [
        {
            name: "Roman",
            available: true
        },
        {
            name: "Sasha",
            available: false
        },
        {
            name: "Kate",
            available: true
        }
    ];
}]);
