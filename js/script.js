var connectWorld= angular.module('connectWorld', ['ngRoute', 'firebase']);

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


            when('/profile', {
                templateUrl: 'profile.html',
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

            when('/communityupdate', {
                templateUrl: 'community.html',
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

connectWorld.controller('loginController', function ($scope, $firebase, $rootScope) {

    var ref = new Firebase("https://luminous-heat-6155.firebaseio.com/Users");
    var sync = $firebase(ref);
    $rootScope.usersData = sync.$asArray();

    var refGroups = new Firebase("https://luminous-heat-6155.firebaseio.com/Groups");
    var syncGroups = $firebase(refGroups);
    $rootScope.groupsData = syncGroups.$asArray();

    var refEvents = new Firebase("https://luminous-heat-6155.firebaseio.com/EventsList");
    var syncEvents = $firebase(refEvents);
    $rootScope.eventsData = syncEvents.$asArray();

    $scope.errorMsg = "";
    
    $scope.login = function () {
        for (var i = 0; i < $scope.usersData.length; i++) {
            // changed by savanna
            //if ($scope.username == $scope.usersData[i].id && $scope.password == $scope.usersData[i].password) {
             if (1) { 
                console.log("Login success");
//                $rootScope.thisUser = $scope.username;
                //changing rootscope.thisUser and scope.user to string without DOT EG: mxchua.2012 = mxchua2012
                $scope.username = "savanna";
                $rootScope.thisUserWDot = $scope.username;
                $rootScope.thisUser = $scope.username.replace(/\W/g, '');
                $scope.username = $scope.username.replace(/\W/g, '');
                console.log($rootScope.thisUser);

                var refUser = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $scope.username);
                var syncUser = $firebase(refUser);
                $rootScope.thisUserData = syncUser.$asObject();

                var refUserCalendar = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $scope.username + "/calendar");
                var syncUserCalendar = $firebase(refUserCalendar);
                $rootScope.thisCalendarData = syncUserCalendar.$asArray();

                var refUserGroups = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $scope.username + "/groups");
                var syncUserGroups = $firebase(refUserGroups);
                $rootScope.thisGroupsData = syncUserGroups.$asArray();

                $rootScope.thisGroupsObjData = [];

                $rootScope.thisCalendarData.$loaded().then(function () {
                    console.log("this calendar data loaded");

                    $rootScope.thisGroupsData.$loaded().then(function () {
                        // go match the groups in this user to the group objects
                        for (var i = 0; i < $rootScope.thisGroupsData.length; i++) {

                            for (var j = 0; j < $rootScope.groupsData.length; j++) {
                                if ($rootScope.thisGroupsData[i].$value == $rootScope.groupsData[j].id) {
//                                    console.log($rootScope.groupsData[j]);
                                    $rootScope.thisGroupsObjData.push($rootScope.groupsData[j]);
                                    break;
                                }
                            }
                        }
                        window.location = 'index.html#/events';
                    });
                });
                return;
            }
        }

        $scope.errorMsg = "Opps! Wrong username and/or password.";
    };
});

connectWorld.controller('logOutController', function ($scope) {
    //setTimeout(function(){ window.location = "index.html#/login"; }, 5000);
});

