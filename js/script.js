var connectWorld = angular.module('connectWorld', ['ngRoute']);

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

            when('/communityProfile', {
                templateUrl: 'communityProfile.html',
                controller: 'communityProfileController'
            }).

            when('/myProfile', {
                templateUrl: 'myProfile.html',
                controller: 'myProfileController'
            }).
            when('/editMyProfile', {
                templateUrl: 'editMyProfile.html',
                controller: 'editMyProfileController'
            }).

            when('/peopleProfile', {
                templateUrl: 'myProfile.html',
                controller: 'peopleProfileController'
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

//connectWorld.factory('MasterData', function($firebase) {
//    var ref = new Firebase("https://luminous-heat-6155.firebaseio.com/Users");
//    var sync = $firebase(ref);
//    var usersData = sync.$asArray();
//    
//    var refGroups = new Firebase("https://luminous-heat-6155.firebaseio.com/Groups");
//    var syncGroups = $firebase(refGroups);
//    var groupsData = syncGroups.$asArray();
//    
//    var refEvents = new Firebase("https://luminous-heat-6155.firebaseio.com/EventsList");
//    var syncEvents = $firebase(refEvents);
//    var eventsData = syncEvents.$asArray();
//    
//    var loginUser = "";
//    
//  return {
//    getUsersData: function() {
//      return usersData;
//    },
//    getGroupsData: function() {
//      return groupsData;
//    },
//    getEventsData: function() {
//      return eventsData;
//    },
//    setLoginUser: function(user) {
//      loginUser = user;
//    },
//    getLoginUser: function() {
//      return loginUser;
//    }
//  };
//});