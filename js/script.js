var connectWorld = angular.module('connectWorld', ['ngRoute', 'ngTagsInput']);

connectWorld.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/exploreBuddy', {
                templateUrl: 'exploreBuddy.html',
                controller: 'exploreBuddyController'
            }).

            when('/exploreBuddySearchResult', {
                templateUrl: 'exploreBuddySearchResult.html',
                controller: 'exploreBuddySearchResultController'
            }).

            when('/exploreCommunity', {
                templateUrl: 'exploreCommunity.html',
                controller: 'exploreCommunityController'
            }).

            when('/exploreCommunitySearchResult', {
                templateUrl: 'exploreCommunitySearchResult.html',
                controller: 'exploreCommunitySearchResultController'
            }).

            when('/japaneseCooks', {
                templateUrl: 'japaneseCooks.html',
                controller: 'japaneseCooksController'
            }).

            when('/japaneseCooksJoined', {
                templateUrl: 'japaneseCooksJoined.html',
                controller: 'japaneseCooksJoinedController'
            }).

            when('/createEvent', {
                templateUrl: 'createEvent.html',
                controller: 'createEventController'
            }).

            when('/myProfile', {
                templateUrl: 'myProfile.html',
                controller: 'myProfileController'
            }).

            when('/makuroProfile', {
                templateUrl: 'makuroProfile.html',
                controller: 'makuroProfileController'
            }).

            when('/editMyProfile', {
                templateUrl: 'editMyProfile.html',
                controller: 'editMyProfileController'
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

            when('/chat', {
                templateUrl: 'chat.html',
                controller: 'messageController'
            }).


            when('/notification', {
                templateUrl: 'notification.html',
                controller: 'notificationController'
            }).

            when('/buddyrequest', {
                templateUrl: 'buddyRequest.html',
                controller: 'notificationController'
            }).

            otherwise({
                redirectTo: 'exploreBuddy'
            });
}]);

connectWorld.controller('loginController',
    function ($scope, $location) {
        $scope.login = function() {
            if ($scope.email === 'timgoh@hotmail.com' && $scope.password === '123456') {
                window.location.href = 'index.html#/exploreBuddy';
            } else {
                $scope.errorMsg = "Ops! Incorrect username and/or password";
            }
        }
});

connectWorld.controller('logOutController', function ($scope) {
    //setTimeout(function(){ window.location = "index.html#/login"; }, 5000);
});
