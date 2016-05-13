angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            // templateUrl: 'templates/home.html',
            templateProvider: function($templateCache){
              return $templateCache.get('templates/home.tmpl.html');
            }
            //controller: 'HomeController'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about.tmpl.html',
            //controller: 'AboutController'
        })
        .state('user', {
            url:'/user',
            templateUrl: 'templates/user.tmpl.html',
            //controller: 'AboutController'
        })
        .state('video', {
            url:'/video',
            templateUrl: 'templates/video.tmpl.html',
            //controller: 'AboutController'
        })
        .state('click', {
            url:'/click',
            templateUrl: 'templates/click.tmpl.html',
            //controller: 'AboutController'
        })
        .state('userTiles', {
            url:'/usertiles',
            templateUrl: 'templates/userTiles.tmpl.html',
            //controller: 'AboutController'
        })
        .state('dollarDecoratorDirective', {
            url:'/dollardecoratordirective',
            templateUrl: 'templates/dollarDecoratorDirective.tmpl.html',
            //controller: 'AboutController'
        })
        .state('fontScaleDecoratorDirective', {
            url:'/fontscaledecoratordirective',
            templateUrl: 'templates/fontScaleDecoratorDirective.tmpl.html',
            //controller: 'AboutController'
        })
        .state('keyAnnouncerDecoratorDirective', {
            url:'/keyannouncerdecoratordirective',
            templateUrl: 'templates/keyAnnouncerDecoratorDirective.tmpl.html',
            //controller: 'AboutController'
        })


}]);
