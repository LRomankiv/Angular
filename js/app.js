var animalsApp = angular.module('animalsApp', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider.when('/cats',
    {
        templateUrl:'views/cats.html'
    });
    $routeProvider.when('/dogs',
    {
        templateUrl:'views/dogs.html'
    });
    $routeProvider.when('/horses',
    {
        templateUrl:'views/horses.html'
    });
    $routeProvider.when('/form',
    {
        templateUrl:'views/form.html',
        controller:'formController'
    });
    $routeProvider.otherwise({redirectTo: '/cats'});
});