var customDirectiveApp = angular.module('customDirectiveApp', []);

customDirectiveApp.controller('customController', ['$scope', function($scope) {
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

// <div foo-bar>FooBar</div>    ->      директива как атрибут (restrict: 'A')
// <foo-bar>FooBar</foo-bar>    ->      директива как элемент (restrict: 'E')
// <div class="foo-bar">FooBar</div>    ->      директива как класс (restrict: 'C')
// <!-- directive: foo-bar -->    ->      директива в виде комментария (restrict: 'M')
// два последних - это легаси

customDirectiveApp.directive('customUsers', [function () {
    return {
        restrict: 'AE',
        scope: {
            users: '='
        },
        // можно использовать просто template или templateUrl
        // template: '<p>{{users[index]}}</p>',
        templateUrl: '../custom_directive/custom_users.html',
        controller: function ($scope) {
            $scope.index = 1;
        }
    }
}]);
