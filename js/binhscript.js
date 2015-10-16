/**
 * Created by tbnguyen.2012 on 2/10/2015.
 */

connectWorld.controller('exploreBuddyController', function ($scope) {

});

connectWorld.controller('japaneseCooksJoinedController', function ($scope) {
    $scope.joinEvent = function () {
        document.getElementById('jointevent').style.display = "none";
        document.getElementById('cancelJoining').style.display = "inline-block";
        window.alert("You have join the event");
    }
    $scope.leaveEvent= function () {
        document.getElementById('jointevent').style.display = "inline-block";
        document.getElementById('cancelJoining').style.display = "none";
        window.alert("You have cancel joining the event");
    }
});

connectWorld.controller('exploreBuddySearchResultController', function ($scope) {
    $scope.tags = [
        {"text": "Japanese"},
        {"text": "Food"},
        {"text": "Cooking"},
        {"text": "Male"},
        {"text": "20-30"},
        {"text": "Central"}
    ];
});

connectWorld.controller('exploreCommunitySearchResultController', function ($scope) {
    $scope.tags = [
        {"text": "Japanese"},
        {"text": "Food"},
        {"text": "Cooking"},
        {"text": "10-30"},
        {"text": "Central"}
    ];
});

connectWorld.controller('makuroProfileController', function ($scope) {
    $scope.buddyUp = function () {
        document.getElementById('buddy').style.display = "none";
        document.getElementById('unbuddy').style.display = "block";
        window.alert("Buddy request sent to Makuro. Makuro has just accepted your request");
    }
    $scope.unBuddy= function () {
        document.getElementById('buddy').style.display = "block";
        document.getElementById('unbuddy').style.display = "none";
        window.alert("You have unbuddy Makuro");
    }

    $scope.basicInfo =
    {
        "fullname": "Makuro Tomosoke",
        "gender": "Male",
        "birthday": new Date('1992', '01', '18'),
        "nationality": "Japanese",
        "location": "Central, Singapore",
        "mySelf": "I am an exchange student from Japan studying accountancy in SMU. I would like to learn Mandarin to help me order local food in food court seamlessly."
    };
    $scope.language =
    {
        "proficient": "Japanese, English",
        "interested": "Mandarin, Korean"
    };
    $scope.tags = [
        {"text": "Cooking"},
        {"text": "Food"},
        {"text": "Anime"},
        {"text": "Korean Drama"}
    ];

});

connectWorld.controller('exploreCommunityController', function ($scope) {

});

connectWorld.controller('createCommunityController', function ($scope) {

});

connectWorld.controller('myCommunityController', function ($scope) {

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
            if ($scope.passWord === undefined | $scope.password === null |
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
                $scope.languageSpoken === undefined | $scope.languageSpoken === null |
                $scope.languageInterested === undefined | $scope.languageInterested === null |
                $scope.nationality === undefined | $scope.nationality === null) {
                $scope.errorMsg = "Please fill up all the details";
            } else {
                if ($scope.fullname.split(' ').length < 2) {
                    $scope.errorMsg = "Your full name should have at least 2 words";
                } else {
                    window.location.href = 'login.html';
                    window.alert("Congratulation! You have successfully signup for an account");
                }
            }
        }

});
