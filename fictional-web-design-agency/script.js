/**
 * Created by praneethkumar on 14/07/16.
 */
var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    }).
        otherwise({redirectTo:'/main'})
}])

.controller('MainCtrl', ['$scope',function ($scope) {
    $scope.person = 'someperson';
    console.log($scope);
    
}]);