/**
 * Created by tbnguyen.2012 on 2/10/2015.
 */

connectWorld.controller('exploreBuddyController', function ($scope) {

});

connectWorld.controller('kDramaCrazeController', function ($scope) {
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
        "location": "Central Singapore",
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

connectWorld.controller('brandonProfileController', function ($scope) {
   $scope.basicInfo =
    {
        "fullname": "Brendan Brown",
        "gender": "Male",
        "birthday": new Date('1995', '08', '18'),
        "nationality": "French",
        "location": "East Singapore",
        "mySelf": "I love fashion."
    };
    $scope.language =
    {
        "proficient": "Japanese, French",
        "interested": "Mandarin"
    };
    $scope.tags = [
        {"text": "Fashion"},
    ];

});

connectWorld.controller('calebProfileController', function ($scope) {
    $scope.basicInfo =
    {
        "fullname": "Caleb Castro",
        "gender": "Male",
        "birthday": new Date('1987', '08', '18'),
        "nationality": "Phillipines",
        "location": "East Singapore",
        "mySelf": "I am an working adult aged 28 who is proficient in Japanese and I really need to practice English as I just found a job in Singapore. I need help to adapt Singapore living environment. Thank you."
    };
    $scope.language =
    {
        "proficient": "Japanese, Tagalog",
        "interested": "Mandarin"
    };
    $scope.tags = [
        {"text": "Fashion"},
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
        document.getElementById('upcoming-button').style.color = "white";
        document.getElementById('pastevents-button').style.background = "white";
        document.getElementById('pastevents-button').style.color= "#FEA900";
        document.getElementById('groupinfo-button').style.background = "white";
        document.getElementById('groupinfo-button').style.color = "#FEA900";
        document.getElementById('member-button').style.background = "white";
        document.getElementById('member-button').style.color = "#FEA900";
    }

    $scope.showPastEvents = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "block";
        document.getElementById('members').style.display = "none";
        document.getElementById('group-info').style.display = "none";
        document.getElementById('upcoming-button').style.background = "white";
        document.getElementById('upcoming-button').style.color = "#FEA900";
        document.getElementById('pastevents-button').style.background = "#FEA900";
        document.getElementById('pastevents-button').style.color = "white";
        document.getElementById('groupinfo-button').style.background = "white";
        document.getElementById('groupinfo-button').style.color= "#FEA900";
        document.getElementById('member-button').style.background = "white";
        document.getElementById('member-button').style.color = "#FEA900";
    }

    $scope.showGroupInfo = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "none";
        document.getElementById('members').style.display = "none";
        document.getElementById('group-info').style.display = "block";
        document.getElementById('upcoming-button').style.background = "white";
        document.getElementById('upcoming-button').style.color = "#FEA900";
        document.getElementById('pastevents-button').style.background = "white";
        document.getElementById('pastevents-button').style.color= "#FEA900";
        document.getElementById('groupinfo-button').style.background = "#FEA900";
        document.getElementById('groupinfo-button').style.color = "white";
        document.getElementById('member-button').style.background = "white";
        document.getElementById('member-button').style.color = "#FEA900";
    }

    $scope.showMembers = function () {
        document.getElementById('upcoming-events').style.display = "none";
        document.getElementById('past-events').style.display = "none";
        document.getElementById('members').style.display = "block";
        document.getElementById('group-info').style.display = "none";
        document.getElementById('upcoming-button').style.background = "white";
        document.getElementById('upcoming-button').style.color = "#FEA900";
        document.getElementById('pastevents-button').style.background = "white";
        document.getElementById('pastevents-button').style.color= "#FEA900";
        document.getElementById('groupinfo-button').style.background = "white";
        document.getElementById('groupinfo-button').style.color = "#FEA900";
        document.getElementById('member-button').style.background = "#FEA900";
        document.getElementById('member-button').style.color = "white";
    }
});

connectWorld.controller('createEventController', function ($scope) {

});

connectWorld.controller('kDramaCrazeEventCreatingController', function ($scope) {

});

connectWorld.controller('kDramaCrazeCreateEventController', function ($scope) {

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
                    window.location.href = 'index.html#/exploreBuddy';
                    window.alert("Congratulation! You have successfully signup for an account");
                }
            }
        }

});

connectWorld.controller('navigationBarBottom', function ($scope) {
    $scope.explore = function () {
        document.getElementById('footer-navbar-icons1').style.color = "#FF8C00";
        document.getElementById('footer-navbar-icons2').style.color = "white";
        document.getElementById('footer-navbar-icons3').style.color = "white";
        document.getElementById('footer-navbar-icons4').style.color = "white";
        document.getElementById('footer-navbar-icons5').style.color = "white";
    }
    $scope.community = function () {
        document.getElementById('footer-navbar-icons1').style.color = "white";
        document.getElementById('footer-navbar-icons2').style.color = "#FF8C00";
        document.getElementById('footer-navbar-icons3').style.color = "white";
        document.getElementById('footer-navbar-icons4').style.color = "white";
        document.getElementById('footer-navbar-icons5').style.color = "white";
    }
    $scope.message = function () {
        document.getElementById('footer-navbar-icons1').style.color = "white";
        document.getElementById('footer-navbar-icons2').style.color = "white";
        document.getElementById('footer-navbar-icons3').style.color = "#FF8C00";
        document.getElementById('footer-navbar-icons4').style.color = "white";
        document.getElementById('footer-navbar-icons5').style.color = "white";
    }
    $scope.notification = function () {
        document.getElementById('footer-navbar-icons1').style.color = "white";
        document.getElementById('footer-navbar-icons2').style.color = "white";
        document.getElementById('footer-navbar-icons3').style.color = "white";
        document.getElementById('footer-navbar-icons4').style.color = "#FF8C00";
        document.getElementById('footer-navbar-icons5').style.color = "white";
    }
    $scope.more = function () {
        document.getElementById('footer-navbar-icons1').style.color = "white";
        document.getElementById('footer-navbar-icons2').style.color = "white";
        document.getElementById('footer-navbar-icons3').style.color = "white";
        document.getElementById('footer-navbar-icons4').style.color = "white";
        document.getElementById('footer-navbar-icons5').style.color = "#FF8C00";
    }

});