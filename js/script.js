var connectWorld = angular.module('connectWorld', ['ngRoute', 'ngTagsInput']);

connectWorld.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/exploreBuddy', {
                templateUrl: 'exploreBuddy.html',
                controller: 'exploreBuddyController'
            }).

            when('/profile', {
                templateUrl: 'profile.html',
                controller: 'profileController'
            }).

            when('/exploreCommunity', {
                templateUrl: 'exploreCommunity.html',
                controller: 'exploreCommunityController'
            }).

            when('/japaneseCooks', {
                templateUrl: 'japaneseCooks.html',
                controller: 'japaneseCooksController'
            }).

            when('/createEvent', {
                templateUrl: 'createEvent.html',
                controller: 'createEventController'
            }).

            when('/myProfile', {
                templateUrl: 'myProfile.html',
                controller: 'myProfileController'
            }).

            when('/myBuddy', {
                templateUrl: 'myBuddy.html',
                controller: 'myBuddyController'
            }).

            when('/newBuddyRequest', {
                templateUrl: 'newBuddyRequest.html',
                controller: 'newBuddyRequestController'
            }).

            when('/myCommunity', {
                templateUrl: 'myCommunity.html',
                controller: 'myCommunityController'
            }).

            when('/createCommunity', {
                templateUrl: 'createCommunity.html',
                controller: 'createCommunityController'
            }).

            when('/inbox', {
                templateUrl: 'inbox.html',
                controller: 'inboxController'
            }).

            when('/message', {
                templateUrl: 'message.html',
                controller: 'messageController'
            }).

            when('/notification', {
                templateUrl: 'notification.html',
                controller: 'notificationController'
            }).

            otherwise({
                redirectTo: 'exploreBuddy'
            });
}]);


connectWorld.controller('loginController',
    function ($scope, $location) {
        $scope.login = function() {
            if ($scope.username === 'timgoh' && $scope.password === '123456') {
                window.location.href = 'index.html#/exploreBuddy';
            } else {
                $scope.errorMsg = "Ops! Incorrect username and/or password";
            }
        }
});

connectWorld.controller('logOutController', function ($scope) {
    //setTimeout(function(){ window.location = "index.html#/login"; }, 5000);
});
