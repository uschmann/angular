(function() {
    var module = angular.module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute'
    ]);

    module.controller('AppController', ['$scope', function($scope) {
        $scope.title = 'Hello World';
    }]);
})();

