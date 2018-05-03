var app = angular.module('ShoeApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
    }).when('/shoes', {
        templateUrl: 'views/shoes.html',
        controller: 'ShoesController as vm'
    }).otherwise({
        template: '<h2>404</h2>'
    })
})