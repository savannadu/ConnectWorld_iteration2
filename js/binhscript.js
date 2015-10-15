/**
 * Created by tbnguyen.2012 on 2/10/2015.
 */

connectWorld.controller('exploreBuddyController', function () {

});

connectWorld.controller('exploreCommunityController', function () {

});

connectWorld.controller('createCommunityController', function () {

});

connectWorld.controller('myCommunityController', function () {

});

connectWorld.controller('forgotPasswordController', function ($scope) {

});

connectWorld.controller('messageController', function ($scope) {

});

connectWorld.controller('notificationController', function ($scope) {

});

connectWorld.controller('myBuddyController', function ($scope) {

});

connectWorld.controller('japaneseCooksController', function ($scope) {
    $scope.showUpcomingEvents = function () {
        document.getElementById('upcoming-events').style.display = "block";
        document.getElementById('past-events').style.display = "none";
        document.getElementById('members').style.display = "none";
        document.getElementById('group-info').style.display = "none";
        document.getElementById('upcoming-button').style.background = "#FEA900";
        document.getElementById('pastevents-button').style.background = "#ffd493";
        document.getElementById('groupinfo-button').style.background = "#ffd493";
        document.getElementById('member-button').style.background = "#ffd493";
    }

    $scope.showPastEvents = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "block";
        document.getElementById('members').style.display = "none";
        document.getElementById('group-info').style.display = "none";
        document.getElementById('upcoming-button').style.background = "#ffd493";
        document.getElementById('pastevents-button').style.background = "#FEA900";
        document.getElementById('groupinfo-button').style.background = "#ffd493";
        document.getElementById('member-button').style.background = "#ffd493";
    }

    $scope.showGroupInfo = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "none";
        document.getElementById('members').style.display = "none";
        document.getElementById('group-info').style.display = "block";
        document.getElementById('upcoming-button').style.background = "#ffd493";
        document.getElementById('pastevents-button').style.background = "#ffd493";
        document.getElementById('groupinfo-button').style.background = "#FEA900";
        document.getElementById('member-button').style.background = "#ffd493";
    }

    $scope.showMembers = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "none";
        document.getElementById('members').style.display = "block";
        document.getElementById('group-info').style.display = "none";
        document.getElementById('upcoming-button').style.background = "#ffd493";
        document.getElementById('pastevents-button').style.background = "#ffd493";
        document.getElementById('groupinfo-button').style.background = "#ffd493";
        document.getElementById('member-button').style.background = "#FEA900";
    }
});

connectWorld.controller('createEventController', function ($scope) {

});

connectWorld.controller('signUpController',
    function ($scope, $location) {
        $scope.signUp = function() {
            if ($scope.userName === undefined | $scope.username === null |
                $scope.passWord === undefined | $scope.password === null |
                $scope.email === undefined | $scope.email === null) {

                $scope.errorMsg = "Please fill up all the details";
            } else {
                window.location.href = 'signup2.html';
            }
        }
});

connectWorld.controller('signUpController2',
    function ($scope, $location) {
        $scope.signUp2 = function() {
            if ($scope.fullname === undefined | $scope.fullname === null |
                $scope.birthday === undefined | $scope.birthday === null |
                $scope.location === undefined | $scope.location === null |
                $scope.languageSpoken === undefined | $scope.languageSpoken === null |
                $scope.languageInterested === undefined | $scope.languageInterested === null |
                $scope.nationality === undefined | $scope.nationality === null) {

                $scope.errorMsg = "Please fill up all the details";
            } else {
                if ($scope.fullname.split(' ').length < 2) {
                    $scope.errorMsg = "Your full name should have at least 2 words";
                } else {
                    window.location.href = 'login.html';
                }
            }
        }

});
