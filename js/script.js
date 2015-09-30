var letssmuApp = angular.module('letssmuApp', ['ngRoute', 'firebase']);

letssmuApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/login', {
                    templateUrl: 'login.html',
                    controller: 'loginController'
                }).
                when('/events', {
                    templateUrl: 'events.html',
                    controller: 'eventsController'
                }).
                when('/group', {
                    templateUrl: 'group.html',
                    controller: 'groupController'
                }).
                when('/add-group', {
                    templateUrl: 'add-group.html',
                    controller: 'groupController'
                }).
                when('/members', {
                    templateUrl: 'members.html',
                    controller: 'memberListController'
                }).
                when('/calendar', {
                    templateUrl: 'calendar.html',
                    controller: 'calendarController2'
                }).
                when('/calendar-week', {
                    templateUrl: 'calendar-week.html',
                    controller: 'calendarController2'
                }).
                when('/common-timeslot', {
                    templateUrl: 'common-timeslot.html',
                    controller: 'calendarController2'
                }).
                when('/create', {
                    templateUrl: 'create.html',
                    controller: 'createController'
                }).
                when('/personal-event', {
                    templateUrl: 'personal-event.html',
                    controller: 'personalEventController'
                }).
                when('/personal-event-edit', {
                    templateUrl: 'personal-event-edit.html',
                    controller: 'personalEventController'
                }).
                when('/group-meeting', {
                    templateUrl: 'group-meeting.html',
                    controller: 'groupMeetingController'
                }).
                when('/group-meeting-edit', {
                    templateUrl: 'group-meeting-edit.html',
                    controller: 'groupMeetingController'
                }).
                when('/event-details', {
                    templateUrl: 'event-details.html',
                    controller: 'eventsDetailsController'
                }).
                when('/logout', {
                    templateUrl: 'logout.html',
                    controller: 'logOutController'
                }).
                otherwise({
                    redirectTo: 'login'
                });
    }]);

//letssmuApp.factory('MasterData', function($firebase) {
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


letssmuApp.factory('Notification', function ($firebase) {
    return {
        acceptEvent: function () {
            $('#notificationModal').modal('hide');
            window.location = 'index.html#/events';
        },
        declineEvent: function (user) {

        },
        KIVEvent: function () {
            $('#notificationModal').modal('hide');
            window.location = 'index.html#/events';
        },
        showNotification: function () {

            $('#notificationModal').modal('show');
        }
    };
});


letssmuApp.controller('loginController', function ($scope, $firebase, $rootScope) {

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

letssmuApp.controller('eventsController', function ($scope, $firebase, $rootScope, Notification, $location) {
//    $('#eventContainer').hide();
//    $('#navContainer').addClass('animated fadeInDown');
//    $('#navContainer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$('#eventContainer').show(); $('#eventContainer').addClass('animated fadeInUp');});

    var tempNotification = "false";

//    Notification.showNotification();
    // watch for any notifications
    $rootScope.$watch(function () {
        console.log("Notifications: ");
        console.log($rootScope.thisUserData.notifications);
        if (tempNotification != $rootScope.thisUserData.notifications) {
            Notification.showNotification();
            tempNotification = $rootScope.thisUserData.notifications;

            $scope.eventId = tempNotification;
            for (var i = 0; i < $rootScope.eventsData.length; i++) {

                if ($scope.eventId == $rootScope.eventsData[i].id) {
                    console.log($rootScope.eventsData[i].title);
                    $scope.eventTitle = $rootScope.eventsData[i].title;
                    $scope.eventDate = $rootScope.eventsData[i].day + " " + $rootScope.eventsData[i].month + " " + $rootScope.eventsData[i].year;
                    $scope.eventTime = $rootScope.eventsData[i].from + " - " + $rootScope.eventsData[i].to;

                    $scope.calIndex = parseInt($rootScope.eventsData[i].day) + 1;
                    break;
                }
            }
            setTimeout(function () {
                tempNotification = "false"
                $rootScope.thisUserData.notifications = "false";
                $rootScope.thisUserData.$save();
            }, 100);

        }
    });

    // for notification
    $scope.acceptEvent = function () {
        Notification.acceptEvent();
        runUpcomingEvents();
    };

    $scope.KIVEvent = function () {
        Notification.acceptEvent();
        runUpcomingEvents();
    };

    $scope.decline = false;

    $scope.declineReason = function () {
        $scope.decline = true;
    }

    $scope.declineReasonCancel = function () {
        $scope.decline = false;
    }

    $scope.declineEvent = function (calIndex) {
        console.log("DECLINE");
        // remove event from this user
        // loop through all the users in db
        for (var j = 0; j < $rootScope.usersData.length; j++) {
            // if matched, retrieved the user calendar and change the values
            if ($rootScope.usersData[j].$id == $rootScope.thisUser) {

                var calendarArr = $rootScope.usersData[j].calendar;

                calendarArr[calIndex].event.pop();
                if (!calendarArr[calIndex].event) {
                    calendarArr[calIndex].event = "";
                }
                // save the data in database
                $rootScope.usersData.$save(j);
                break;
            }
        }


        $('#notificationModal').modal('hide');
//       window.location = 'index.html#/events';
        runUpcomingEvents();
    };

    var runUpcomingEvents = function () {
        $rootScope.upcomingEvents = [];

        var refUserCalendar = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $rootScope.thisUser + "/calendar");
        var syncUserCalendar = $firebase(refUserCalendar);
        $rootScope.thisCalendarData = syncUserCalendar.$asArray();

        var weekCount = 6;
        var tempArray = [];

        $rootScope.thisCalendarData.$loaded().then(function () {

            for (var i = 0; i < $rootScope.thisCalendarData.length; i++) {
                var thisObj = $rootScope.thisCalendarData[i];
                //            console.log(thisObj);
                // no event on this day
                if (thisObj.event) {
                    console.log("has event");
                    //                console.log(thisObj.event.length);
                    for (var j = 0; j < thisObj.event.length; j++) {

                        for (var k = 0; k < $rootScope.eventsData.length; k++) {
                            if (thisObj.event[j] == $rootScope.eventsData[k].id) {

                                if ($rootScope.eventsData[k].type == "group" || $rootScope.eventsData[k].type == "personal") {
//                                    $rootScope.upcomingEvents.push($rootScope.eventsData[k]);
                                    tempArray.push($rootScope.eventsData[k]);
                                }
                            }
                        }
                    }
                }
                console.log(i);
                if (i == weekCount) {
                    console.log(weekCount);
                    weekCount += 7;
                    if (tempArray.length != 0) {
                        // put this into 1 week
                        tempArray.sort(compare);
                        $rootScope.upcomingEvents.push(tempArray);
                        // clear the array for new week
                        tempArray = [];
                    }
                }
            }
            // sort the array base on time
//            $rootScope.upcomingEvents.sort(compare);
            if (tempArray.length != 0) {
                tempArray.sort(compare);
                $rootScope.upcomingEvents.push(tempArray);
            }
            console.log($rootScope.upcomingEvents);

        });
    };

    runUpcomingEvents();
//
//    Logout confirmation, not working   
//    $scope.logout = function(){
//        if(window.confirm("Do you really want to logout?") == true){
//            window.location = 'index.html#/logout';
//        }else{
//            return;
//        }
//    };
    //ADD THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    $scope.setEventDetails = function (event) {
        $rootScope.event = event;
        //console.log($rootScope.event.attendees);
    };

    //END ADD THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

    $scope.showAppExit = function() {
        $('#exitAppModal').modal('show');
    };
    $scope.hideAppExit = function() {
        $('#exitAppModal').modal('hide');
    };
    
    $rootScope.url = $location.path();
    
    $scope.changeUrl = function() {
        $rootScope.url = $location.path();
         window.location = 'index.html#/create';
    };
});

letssmuApp.controller('createController', function ($scope, $firebase, $rootScope,$location) {
    $scope.setGroup = function (groupId) {
        $rootScope.group = groupId;
    };
    
    $scope.goToPage = function () {
        console.log('index.html#' + $rootScope.url);
        window.location = 'index.html#' + $rootScope.url;
    };
});

letssmuApp.controller('groupController', function ($scope, $firebase, $rootScope) {
    
    $rootScope.thisGroupsObjData = [];

    var refUserGroups = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $rootScope.thisUser + "/groups");
    var syncUserGroups = $firebase(refUserGroups);
    $rootScope.thisGroupsData = syncUserGroups.$asArray();

    $rootScope.thisGroupsData.$loaded().then(function () {
        // go match the groups in this user to the group objects
        for (var i = 0; i < $rootScope.thisGroupsData.length; i++) {

            for (var j = 0; j < $rootScope.groupsData.length; j++) {
                if ($rootScope.thisGroupsData[i].$value == $rootScope.groupsData[j].id) {
                    console.log($rootScope.groupsData[j]);
                    $rootScope.thisGroupsObjData.push($rootScope.groupsData[j]);
                    break;
                }
            }
        }
    });


    $scope.members = [$rootScope.thisUserWDot];

    $scope.showAddMembersField = function () {
        $('#addMemberBtn').slideToggle();
        $("#newMemberInput").slideToggle();
    };

    $scope.closeAddMembersField = function () {
        $('#addMemberBtn').slideToggle();
        $("#newMemberInput").slideToggle();
    };

    $scope.addMember = function (id) {
        //getting value of input
        var inputName = $("#newMemberName").val().toLowerCase();
        var tempName = inputName.replace(/\W/g, '');
        var isFound = false;
        var isAdded = true;
        for (var i = 0; i < $rootScope.usersData.length; i++) {
            console.log(inputName);
            if (inputName == $scope.usersData[i].id) {
                isFound = true;
                if ($scope.members.indexOf(inputName)) {
                    isAdded = false;
                    $scope.members.push(inputName);
//                     //ADDED THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
                    $('#addMemberBtn').slideToggle();
                    $("#newMemberInput").slideToggle()
                    $("#newMemberName").val("");
//                    // END ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                    break;
                } else {
                    alert("'" + inputName + "' is already added!");
                }
            }
        }
        if (!isFound && isAdded) {
            alert("'" + inputName + "' is not a valid Student ID!");
        }


//        $('#addMemberBtn').slideToggle();
//        $("#newMemberInput").slideToggle();
    };

    $scope.removeMember = function (id) {
        for (var i = 0; i < $scope.members.length; i++) {
            if (i === id) {
                $scope.members.splice(i, 1);
            }
        }
    };

    $scope.addGroup = function () {

        //ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        if (!$scope.groupName) {
            alert("Please enter a group name");
            location.reload();
            return;
        }
        //END ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

        console.log($scope.groupName);
        var groupObj = {
            "id": $rootScope.thisUser + $scope.groupName,
            "title": $scope.groupName,
            "admin": $rootScope.thisUserWDot,
            "members": $scope.members,
            "events": []
        };

        var newGroupRef = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $rootScope.thisUser + "/groups")
        var refGroups = new Firebase("https://luminous-heat-6155.firebaseio.com/Groups");
        //assigning child to header "groups" EG: name of child is mxchua2012GROUPNAME with properties in groupObj
        newGroupRef.child($rootScope.thisUser + $scope.groupName).set(groupObj.id);
        refGroups.child($rootScope.thisUser + $scope.groupName).set(groupObj);

        for (var j = 1; j < $scope.members.length; j++) {
            var ref = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $scope.members[j].replace(/\W/g, '') + "/groups");
//            var sync = $firebase(ref);
//            var temp = sync.$asArray();
            ref.child($rootScope.thisUser + $scope.groupName).set(groupObj.id);

            //temp.$add(groupObj.id);
        }

        window.location = 'index.html#/group';
    };
    
    $scope.groupMembers = function (g) {
      $rootScope.callGroup = g;
    };
});

letssmuApp.controller('memberListController', function ($scope) {
    
    
    $scope.members = [
        {'name': 'Max Chua (You) (Admin)'},
        {'name': 'Shi Kai'},
        {'name': 'Brindha Melon'}
    ];

    $scope.showAddMembersField = function () {
        $('#addMemberBtn').slideToggle();
        $("#newMemberInput").slideToggle();
    };

    $scope.closeAddMembersField = function () {
        $('#addMemberBtn').slideToggle();
        $("#newMemberInput").slideToggle();
    };

    $scope.addMember = function (id) {
        //getting value of input
        var inputName = $("#newMemberName").val();
        $scope.members.push({name: inputName});

        $('#addMemberBtn').slideToggle();
        $("#newMemberInput").slideToggle();
    };
    
    $scope.showExit = function() {
        $('#exitModal').modal('show');
    };
    $scope.hideExit = function() {
        $('#exitModal').modal('hide');
    }
});

letssmuApp.controller('groupMeetingController', function ($scope, $rootScope, $firebase) {
     $scope.goBack = function () {
        history.back();
    };
    
    // to keep track of members in this group
    $scope.groupMembers = [];

    // keep track of attendees, if its undefined, put in the current user
    if (!$rootScope.attendeesArr) {
        $rootScope.attendeesArr = [$rootScope.thisUser];
        $rootScope.attendeesWDot = [$rootScope.thisUserWDot];
    }
    // go retrieve the group members in the group
    for (var i = 0; i < $rootScope.groupsData.length; i++) {
        var thisObj = $rootScope.groupsData[i];
        if (thisObj.title == $rootScope.group) {
            $scope.groupMembers = thisObj.members;
        }
    }

    // all the populated fields
    $scope.duration = "3 hours";
    $scope.reminder = "None";
    $scope.repeat = "One-time event";

    $scope.hourArr = ["09", "10", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "00", "01"];
    $scope.minArr = ["30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15"];


    $scope.hour = "00";
    var localHour = "00";
    // set the time dialer
    if ($rootScope.hourMemory && $rootScope.hourMemory != "") {
        $scope.hour = $rootScope.hourMemory;
    }

    $scope.min = "00";
    var localMin = "00";

    if ($rootScope.minMemory && $rootScope.minMemory != "") {
        $scope.min = $rootScope.minMemory;
    }

    if ($rootScope.meetingTitle && $rootScope.meetingTitle != "") {
        $scope.meetingTitle = $rootScope.meetingTitle;
    }

    // this method will detect scroll and check which is at the selected position
    $('.duoScrollH').on('scroll', function () {
        // scroll the div below
        $('.duoScrollH').scrollTop($(this).scrollTop());

        // see how far has been scrolled
        var scrollLength = ($('.duoScrollH').scrollTop() + 25) / 50;
        var index = Math.floor(scrollLength) + 2;
        var childAtIndex = $('.hour-container').children()[index];
        $('.hour-container').children('.hour-panel').removeClass('active-option');
        $(childAtIndex).addClass('active-option');
        localHour = $(childAtIndex).html();
    });

    $('.duoScrollM').on('scroll', function () {
        $('.duoScrollM').scrollTop($(this).scrollTop());

        // see how far has been scrolled
        var scrollLength = ($('.duoScrollM').scrollTop() + 25) / 50;
        var index = Math.floor(scrollLength) + 2;
        var childAtIndex = $('.min-container').children()[index];
        $('.min-container').children('.hour-panel').removeClass('active-option');
        $(childAtIndex).addClass('active-option');
        localMin = $(childAtIndex).html();
    });

    // click on attendees checkbox
    $scope.clickAllAttendee = function () {


        if ($(event.currentTarget).hasClass('custom-checkbox-checked')) {
            $(event.currentTarget).removeClass('custom-checkbox-checked');
            $('.custom-checkbox').removeClass('custom-checkbox-checked');
            $('.custom-checkbox-you').addClass('custom-checkbox-checked');
            $rootScope.attendeesArr = [$rootScope.thisUser];
            $rootScope.attendeesWDot = [$rootScope.thisUserWDot];

        } else {
            $(event.currentTarget).addClass('custom-checkbox-checked');
            $('.custom-checkbox').addClass('custom-checkbox-checked');
            $rootScope.attendeesArr = [];
            for (var i = 0; i < $scope.groupMembers.length; i++) {
                $rootScope.attendeesArr.push(($scope.groupMembers[i].replace(/\W/g, '')));
                $rootScope.attendeesWDot.push($scope.groupMembers[i]);
            }
        }

        console.log($rootScope.attendeesArr);
    };


    // click on attendees checkbox
    $scope.clickAttendee = function (m) {
        var original = m;
        m = m.replace(/\W/g, '');
        if (m != $rootScope.thisUser) {
            if ($(event.currentTarget).hasClass('custom-checkbox-checked')) {
                $(event.currentTarget).removeClass('custom-checkbox-checked');
                $('.custom-checkbox-all').removeClass('custom-checkbox-checked');
                $rootScope.attendeesArr.splice($rootScope.attendeesArr.indexOf(m), 1);
                $rootScope.attendeesWDot.splice($rootScope.attendeesArr.indexOf(m), 1);
            } else {
                $(event.currentTarget).addClass('custom-checkbox-checked');
                $rootScope.attendeesArr.push(m);
                $rootScope.attendeesWDot.push(original);
            }
        }
        console.log($rootScope.attendeesArr);
    };

    // when click on duration options
    $scope.clickDuration = function () {
        $(".duration").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
        // set selected option as active
        $($('.hour-container').children()[2]).addClass('active-option');
        $($('.min-container').children()[2]).addClass('active-option');
    };

    // close duration options
    $scope.clickCloseDuration = function () {
        if ($($(event.target).parent()).is("div.ng-scope") || $(event.target).hasClass("cancel") || $(event.target).hasClass("ok")) {
            $('.dialog-content').animate({
                height: 'toggle'
            }, 290, function () {
                $(".duration").fadeOut("fast");
            });
            if ($(event.target).hasClass("ok")) {
                $scope.hour = localHour;
                $scope.min = localMin;
            }
            ;
        }
    };

    // when click on reminder options
    $scope.clickReminders = function () {
        $(".reminder").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
    };

    // close reminder options
    $scope.clickCloseReminders = function () {
        if ($(event.target).hasClass("item-panel") || $(event.target).hasClass("text-middle")) {
            var target = $(event.target);
            if ($(event.target).hasClass("text-middle")) {
                target = $(event.target).parent('.item-panel');
            }
            $scope.reminder = target.find('.text-middle').attr('label');
            target.siblings('.item-panel').find('.chevron').removeClass('chevron-active');
            target.siblings('.item-panel').find('.text-middle').removeClass('active-option');
            target.find('.chevron').addClass('chevron-active');
            target.find('.text-middle').addClass('active-option');
        }
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
            $(".reminder").fadeOut("fast");
        });
    };

    // when click on repeat options
    $scope.clickRepeat = function () {
        $(".repeat").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
    };

    // close repeat options
    $scope.clickCloseRepeat = function () {
        if ($(event.target).hasClass("item-panel") || $(event.target).hasClass("text-middle")) {
            var target = $(event.target);
            if ($(event.target).hasClass("text-middle")) {
                target = $(event.target).parent('.item-panel');
            }
            $scope.repeat = target.find('.text-middle').attr('label');
            target.siblings('.item-panel').find('.chevron').removeClass('chevron-active');
            target.siblings('.item-panel').find('.text-middle').removeClass('active-option');
            target.find('.chevron').addClass('chevron-active');
            target.find('.text-middle').addClass('active-option');
        }
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
            $(".repeat").fadeOut("fast");
        });
    };

    $scope.findCommonTime = function () {
        // store in root to be sent to common time slot controller
        $rootScope.hourMemory = $scope.hour;
        $rootScope.minMemory = $scope.min;

        $rootScope.meetingTitle = $scope.meetingTitle;

        $rootScope.allEventsArray = [];

        var eventsArray = [];
        // loop through all the attendees
        for (var i = 0; i < $rootScope.attendeesArr.length; i++) {
            var attendee = $rootScope.attendeesArr[i];

            for (var j = 0; j < $rootScope.usersData.length; j++) {
//                console.log($rootScope.usersData[j]);
                if ($rootScope.usersData[j].$id == attendee) {
                    // get the calendar of attendee
                    var tempCal = $rootScope.usersData[j].calendar;
                    // find all his event
                    for (var k = 0; k < tempCal.length; k++) {
                        var singleDayObj = tempCal[k];
                        // has event on this day
                        if (singleDayObj.event) {
                            eventsArray.push.apply(eventsArray, singleDayObj.event);
                        }
                    }
                    // done with this attendee, break out and go to another attendee
                    break;
                }
            }
        }
        console.log(eventsArray);

        for (var m = 0; m < eventsArray.length; m++) {
            var tempEvent = eventsArray[m];

            for (var n = 0; n < $rootScope.eventsData.length; n++) {
                if (tempEvent == $rootScope.eventsData[n].id) {
                    $rootScope.allEventsArray.push($rootScope.eventsData[n]);
                }
            }
        }

        // sort all the events according to date
        $rootScope.allEventsArray.sort(compare);
        window.location = 'index.html#/common-timeslot';
    };

    $scope.errorMsgDuration = "";
    $scope.errorMsgTitle = "";
    $scope.errorMsgStartTime = "";

    $scope.createGroupMeeing = function () {
       
        $scope.errorMsgDuration = "";
        $scope.errorMsgTitle = "";
        $scope.errorMsgStartTime = "";
       
        // selected start time from common timeslot
        if ($scope.hour != "00") {
            
            if ($rootScope.selectedTime) {
                var eventFrom = ($rootScope.selectedTime);

                var eventFromArr = eventFrom.split(' ');

                // find the to time by adding duration to start
                var eventTo = parseInt($rootScope.hourMemory) + parseInt(eventFromArr[3].substring(0, 2));

                // to make sure the venue is not null
                var venue = "";
                if ($scope.groupVenue) {
                    venue = $scope.groupVenue;
                }

                // to make sure the date is always in 2 digits
                var forParsedate = eventFromArr[0];
                if (eventFromArr[0].length < 2) {
                    forParsedate = '0' + eventFromArr[0];
                }

                // to store the date integer values
                var dateFromValue = Date.parse("2014-10-" + forParsedate + "T" + eventFromArr[3] + ":00");
                var dateToValue = Date.parse("2014-10-" + forParsedate + "T" + eventTo + ":" + $rootScope.minMemory + ":00");

                if (!$scope.meetingTitle) {
                    $scope.errorMsgTitle = "Please input a title.";
                } else {
                    $scope.errorMsgTitle = "";
                }
                if (!$rootScope.minMemory) {
                    $scope.errorMsgStartTime = "Please select a start time.";
                    return;
                }
                
                
                // create the event object
                var eventObj = {
                    "id": $rootScope.thisUser + new Date().getTime(),
                    "title": $rootScope.meetingTitle,
                    "day": eventFromArr[0],
                    "month": "Oct",
                    "year": "2014",
                    "from": eventFromArr[3],
                    "to": eventTo + ":" + $rootScope.minMemory,
                    "venue": venue,
                    "attendees": $rootScope.attendeesArr,
                    "type": "group",
                    "dateFrom": dateFromValue,
                    "dateTo": dateToValue
                };
            } else {
                if (!$scope.meetingTitle) {
                    $scope.errorMsgTitle = "Please input a title.";
                } else {
                    $scope.errorMsgTitle = "";
                }
                if (!$rootScope.minMemory) {
                    $scope.errorMsgStartTime = "Please select a start time.";
                }
                return;
            }
        
        } else {
            $scope.errorMsgDuration = "Please select a duration.";
            if (!$scope.meetingTitle) {
                $scope.errorMsgTitle = "Please input a title.";
            } else {
                $scope.errorMsgTitle = "";
            }
            if (!$rootScope.minMemory) {
                $scope.errorMsgStartTime = "Please select a start time.";
            }
            return;
        }

        // first add this event to event database
        $rootScope.eventsData.$add(eventObj);

        // get the index of this date in calendar array
        var calIndex = parseInt(eventFromArr[0]) + 1;

        // loop through all the attendees
        for (var i = 0; i < $rootScope.attendeesArr.length; i++) {
            var attendeeId = $rootScope.attendeesArr[i];
            // loop through all the users in db
            for (var j = 0; j < $rootScope.usersData.length; j++) {
                // if matched, retrieved the user calendar and change the values
                if ($rootScope.usersData[j].$id == attendeeId) {
                    $rootScope.usersData[2].notifications = "hello";

                    var calendarArr = $rootScope.usersData[j].calendar;

                    if (!calendarArr[calIndex].event || calendarArr[calIndex].event == "") {
                        calendarArr[calIndex].event = [eventObj.id];
                    } else {
                        calendarArr[calIndex].event.push(eventObj.id);
                    }
                    // notify members
                    if ($rootScope.usersData[j].$id != $rootScope.thisUser) {
                        $rootScope.usersData[j].notifications = eventObj.id;
                    }
                    // save the data in database
                    $rootScope.usersData.$save(j);
                    break;
                }
            }
        }

        resetFields();
        window.location = 'index.html#/events';
    };

    var resetFields = function () {
        $rootScope.hourMemory = "";
        $rootScope.minMemory = "";
        $rootScope.selectedTime = "";
        $rootScope.attendeesArr = [$rootScope.thisUser];
        $rootScope.attendeesWDot = [$rootScope.thisUserWDot];
    };

    $scope.backToCreate = function () {
        resetFields();
        window.location = 'index.html#/create';
    };
    
    $scope.deleteMeeting = function() {
        
        var ref = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/"+$rootScope.thisUser+"/calendar/5/event");
        var sync = $firebase(ref);
        sync.$remove(0);
//        var attendeesList = sync.$asArray();
//        console.log(attendeesList);
//        var toDelete = attendeesList[1];
//        attendeesList.$remove(toDelete);
        hideGroupExit();
        window.location.replace("index.html#/events")
    };

});

letssmuApp.controller('personalEventController', function ($scope, $rootScope, $firebase) {
    $scope.repeat = "One-time event";
    $scope.reminder = "None";

    //ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
    $scope.events = $rootScope.event;
    //END ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

    // to store data for local
    var localDay = "Wed 1 Oct";
    var localHour = "07";
    var localMin = "00";

    // from data
    $scope.day = "Wed 1 Oct";
    $scope.year = "2014";
    $scope.hour = "07";
    $scope.min = "00";

    // to data
    $scope.dayTo = "Wed 1 Oct";
    $scope.yearTo = "2014";
    $scope.hourTo = "07";
    $scope.minTo = "00";

    $scope.scrollingDate = localDay + " " + $scope.year + ", " + localHour + ":" + localMin;

    $scope.dayArr = ["Mon 30 Sep", "Tue 31 Sep", "Wed 1 Oct", "Thu 2 Oct", "Fri 3 Oct", "Sat 4 Oct", "Sun 5 Oct", "Mon 6 Oct", "Tue 7 Oct", "Wed 8 Oct", "Thu 9 Oct", "Fri 10 Oct", "Sat 11 Oct", "Sun 12 Oct", "Mon 13 Oct", "Tue 14 Oct", "Wed 15 Oct", "Thu 16 Oct", "Fri 17 Oct", "Sat 18 Oct", "Sun 19 Oct", "Mon 20 Oct", "Tue 21 Oct", "Wed 22 Oct", "Thu 23 Oct", "Fri 24 Oct", "Sat 25 Oct", "Sun 26 Oct", "Mon 27 Oct", "Tue 28 Oct", "Wed 29 Oct", "Thu 30 Oct", "Fri 31 Oct", "Sat 1 Nov", "Sun 2 Nov"];
    $scope.hourArr = ["23", "00", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "07", "08"];
    $scope.minArr = ["30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15"];

    // this method will detect scroll and check which is at the selected position
    $('.duoScrollD').on('scroll', function () {
        // scroll the div below
        $('.duoScrollD').scrollTop($(this).scrollTop());

        // see how far has been scrolled
        var scrollLength = ($('.duoScrollD').scrollTop() + 25) / 50;
        var index = Math.floor(scrollLength) + 2;
        var childAtIndex = $('.day-container').children()[index];
        $('.day-container').children('.hour-panel').removeClass('active-option');
        $(childAtIndex).addClass('active-option');
        localDay = $(childAtIndex).html();
        // update the local data
        updateScrollingDate();
    });

    var updateScrollingDate = function () {
        $scope.scrollingDate = localDay + " " + $scope.year + ", " + localHour + ":" + localMin;
        $scope.$apply();
    };

    $('.duoScrollH').on('scroll', function () {
        // scroll the div below
        $('.duoScrollH').scrollTop($(this).scrollTop());

        // see how far has been scrolled
        var scrollLength = ($('.duoScrollH').scrollTop() + 25) / 50;
        var index = Math.floor(scrollLength) + 2;
        var childAtIndex = $('.hour-container').children()[index];
        $('.hour-container').children('.hour-panel').removeClass('active-option');
        $(childAtIndex).addClass('active-option');
        localHour = $(childAtIndex).html();
        // update the local data
        updateScrollingDate();
    });

    $('.duoScrollM').on('scroll', function () {
        $('.duoScrollM').scrollTop($(this).scrollTop());

        // see how far has been scrolled
        var scrollLength = ($('.duoScrollM').scrollTop() + 25) / 50;
        var index = Math.floor(scrollLength) + 2;
        var childAtIndex = $('.min-container').children()[index];
        $('.min-container').children('.hour-panel').removeClass('active-option');
        $(childAtIndex).addClass('active-option');
        localMin = $(childAtIndex).html();
        // update the local data
        updateScrollingDate();
    });

    // variable to see if it is click for from or to.
    var fromOrTo = "";
    // when click on duration options
    $scope.clickFrom = function (x) {
        fromOrTo = x;
        $(".duration").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
        // set selected option as active
        $($('.day-container').children()[2]).addClass('active-option');
        $($('.hour-container').children()[2]).addClass('active-option');
        $($('.min-container').children()[2]).addClass('active-option');
    };

    // close duration options
    $scope.clickCloseFrom = function () {
        if ($($(event.target).parent()).is("div.ng-scope") || $(event.target).hasClass("cancel") || $(event.target).hasClass("ok")) {
            $('.dialog-content').animate({
                height: 'toggle'
            }, 290, function () {
                $(".duration").fadeOut("fast");
            });
            if ($(event.target).hasClass("ok")) {
                if (fromOrTo == "from") {
                    $scope.day = localDay;
                    $scope.hour = localHour;
                    $scope.min = localMin;
                }
                $scope.dayTo = localDay;
                $scope.hourTo = localHour;
                $scope.minTo = localMin;

            }
            ;
        }
    };

    // when click on repeat options
    $scope.clickRepeat = function () {
        $(".repeat").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
    };

    // close repeat options
    $scope.clickCloseRepeat = function () {
        if ($(event.target).hasClass("item-panel") || $(event.target).hasClass("text-middle")) {
            var target = $(event.target);
            if ($(event.target).hasClass("text-middle")) {
                target = $(event.target).parent('.item-panel');
            }
            $scope.repeat = target.find('.text-middle').attr('label');
            target.siblings('.item-panel').find('.chevron').removeClass('chevron-active');
            target.siblings('.item-panel').find('.text-middle').removeClass('active-option');
            target.find('.chevron').addClass('chevron-active');
            target.find('.text-middle').addClass('active-option');
        }
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
            $(".repeat").fadeOut("fast");
        });
    };

    // when click on reminder options
    $scope.clickReminders = function () {
        $(".reminder").fadeIn("fast");
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
        });
    };

    // close reminder options
    $scope.clickCloseReminders = function () {
        if ($(event.target).hasClass("item-panel") || $(event.target).hasClass("text-middle")) {
            var target = $(event.target);
            if ($(event.target).hasClass("text-middle")) {
                target = $(event.target).parent('.item-panel');
            }
            $scope.reminder = target.find('.text-middle').attr('label');
            target.siblings('.item-panel').find('.chevron').removeClass('chevron-active');
            target.siblings('.item-panel').find('.text-middle').removeClass('active-option');
            target.find('.chevron').addClass('chevron-active');
            target.find('.text-middle').addClass('active-option');
        }
        $('.dialog-content').animate({
            height: 'toggle'
        }, 290, function () {
            $(".reminder").fadeOut("fast");
        });
    };


    // add the event
    $scope.addPersonal = function () {

        var eventFrom = ($('#eventFrom').html());
        var eventTo = ($('#eventTo').html());

        var eventFromArr = eventFrom.split(' ');
        var eventToArr = eventTo.split(' ');

        var day = parseInt(eventFromArr[1]) + 1;
        console.log($('#eventFrom').html());

        var venue = "";
        if ($scope.eventVenue) {
            venue = $scope.eventVenue;
        }

        var forParsedate = eventFromArr[1];
        if (eventFromArr[1].length < 2) {
            forParsedate = '0' + eventFromArr[1];
        }
        var dateFromValue = Date.parse("2014-10-" + forParsedate + "T" + eventFromArr[4] + ":00");
        var dateToValue = Date.parse("2014-10-" + forParsedate + "T" + eventToArr[4] + ":00");
        console.log(dateFromValue);

        var obj = {
            "id": $rootScope.thisUser + new Date().getTime(),
            "title": $scope.eventTitle,
            "day": eventFromArr[1],
            "month": "Oct",
            "year": "2014",
            "from": eventFromArr[4],
            "to": eventToArr[4],
            "venue": venue,
            "attendees": [$rootScope.thisUser],
            "type": "personal",
            "dateFrom": dateFromValue,
            "dateTo": dateToValue
        };
        // add in events db
        $rootScope.eventsData.$add(obj);

        // add in personal events list
        var refPEvent = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/" + $rootScope.thisUser + "/calendar");
        var syncPEvent = $firebase(refPEvent);
        var thisDateEvent = syncPEvent.$asArray();

        thisDateEvent.$loaded().then(function () {
            thisDateEvent[day].day = day - 1;
            thisDateEvent[day].month = "Oct";
            if (!thisDateEvent[day].event || thisDateEvent[day].event == "") {
                thisDateEvent[day].event = [obj.id];
            } else {
                var temp = thisDateEvent[day].event;
                temp.push(obj.id);
                thisDateEvent[day].event = temp;
            }
            thisDateEvent.$save(day);
            window.location = 'index.html#/events';
        });

    };
});

letssmuApp.controller('calendarController2', function ($scope, $firebase, $rootScope, $location) {
    
    
    $scope.changeUrl = function() {
        
         window.location = 'index.html#/create';
    };
    
    //ADD THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    $scope.setEventDetails = function (event) {
        $rootScope.event = event;
        //console.log($rootScope.event.attendees);
    };

    //END ADD THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

    $scope.october = $rootScope.thisCalendarData;

    $scope.calendarDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    /* to display on top left */
    var monthsArr = ["Oct", "Nov"];

    $scope.displayMonth = monthsArr[0];
    $scope.displayDay = "Mon";
    $scope.displayYear = "2014";

    var screenwidth = window.innerWidth;
//    console.log(screenwidth);
//    console.log($('#monthScrollPanel').width());

    var screenheight = window.innerHeight;

    $('#monthScrollPanel').scrollsnap({
        snaps: '.perMonth-container',
        direction: 'x',
        proximity: screenwidth / 2,
        duration: 300,
        latency: 100,
        easing: 'easeOutQuad',
        onSnap: function () {
            var monthIndex = Math.floor($('#monthScrollPanel').scrollLeft() / screenwidth);
            $scope.displayMonth = monthsArr[monthIndex];
            $scope.$apply();
        }
    });

    // this function loads when user clicks on the date
    $scope.selectDay = function (i) {
        // this is to display the events on the day
        $scope.agendaArr = [];

        switch (i % 7 + 1) {
            case 1:
                $scope.displayDay = "Mon";
                break;
            case 2:
                $scope.displayDay = "Tue";
                break;
            case 3:
                $scope.displayDay = "Wed";
                break;
            case 4:
                $scope.displayDay = "Thu";
                break;
            case 5:
                $scope.displayDay = "Fri";
                break;
            case 6:
                $scope.displayDay = "Sat";
                break;
            case 7:
                $scope.displayDay = "Sun";
                break;
        }
        ;

        // remove all active class
        $('.cal-date').removeClass('active-day');
        // add acitive class to the one you clicked
        $(event.target).closest('.cal-date').addClass('active-day');
        // retrieve the events for the day
        var tempEvent = $scope.october[i].event;

        for (var i = 0; i < tempEvent.length; i++) {
            for (var j = 0; j < $rootScope.eventsData.length; j++) {
                if (tempEvent[i] == $rootScope.eventsData[j].id) {
                    $scope.agendaArr.push($rootScope.eventsData[j]);
                }
            }
        }
    };

    // find today date
    $scope.init = function () {
        $(".cal-date").each(function (i) {
            if ($(this).html() === "16" && $(this).attr('month') === $scope.displayMonth) {
                $(this).addClass('today-date');
                $(this).addClass('active-day');
            }
        });

    };

    $scope.init();


    // preparing for the number of weeks
    $scope.numOfWeeksArr = [];

    var tempWeekArr = [];

    for (var i = 0; i < $scope.october.length; i++) {
        var weekNum = Math.floor(i / 7) + 1;
        tempWeekArr[i % 7] = $scope.october[i];
        // every 7 days
        if ((i + 1) % 7 === 0) {
            // push into arr
            $scope.numOfWeeksArr[weekNum - 1] = tempWeekArr;
            tempWeekArr = [];
        }
    }

    $('#weekScrollPanel').scrollsnap({
        snaps: '.perWeek-container',
        direction: 'x',
        proximity: screenwidth / 2,
        duration: 300,
        latency: 100,
        easing: 'easeOutQuad',
        onSnap: function () {
//            var monthIndex = $('#weekScrollPanel').scrollLeft() / screenwidth;
//            $scope.displayMonth = monthsArr[monthIndex];
//            $scope.$apply();
        }
    });

    $scope.timeslots = [07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    // set the timeslot height
    $scope.setTimeHeight = function () {
        // 198 is a variable of the rest of the divs height
        $('.timeslots-container').height(screenheight - 187);
        console.log("SET TIME HEIGHT");
    };

    // set the timeslot height
    $scope.setTimeHeightWithNoFooter = function () {
        // 198 is a variable of the rest of the divs height
        $('.timeslots-container').height(screenheight - 150);
    };

    // this function will set the dynamic divs for events
    $scope.setEventHeight = function (eventsArr, containerId) {
        var timeUnit = 29;

        for (var i = 0; i < eventsArr.length; i++) {
            var e = "";
            for (var j = 0; j < $rootScope.eventsData.length; j++) {
                if (eventsArr[i] == $rootScope.eventsData[j].id) {
                    e = $rootScope.eventsData[j];

                    break;
                }
            }

            var fHour = parseInt(e.from.substring(0, 2));
            var fMin = parseInt(e.from.substring(3));
            if (fMin != 0) {
                fMin = fMin / 60;
            }

            console.log(e);
            console.log(e.from.substring(0, 2));
            console.log(e.from.substring(3));

            var tHour = parseInt(e.to.substring(0, 2));
            var tMin = parseInt(e.to.substring(3));
            if (tMin != 0) {
                tMin = tMin / 60;
            }


            var startFrom = (fHour + fMin - 7) * timeUnit + 'px';
            var height = ((tHour + tMin) - (fHour + fMin)) * timeUnit + 'px';

            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = e.title;
            innerDiv.className = "addDiv";
            $(innerDiv).css('top', startFrom);
            $(innerDiv).css('height', height);
            innerDiv.onclick = function () {
//                        callMe(this);
                $scope.setEventDetails(e);
                window.location = 'index.html#/event-details';
            };

            if (e.type == 'group') {
                $(innerDiv).css('background-color', 'rgba(93,156,236,0.3)');
                $(innerDiv).css('border', '1px solid rgba(93,156,236,0.3)');
            } else if (e.type == 'personal') {
                $(innerDiv).css('background-color', 'rgba(230,126,34,0.3)');
                $(innerDiv).css('border', '1px solid rgba(230,126,34,0.3)');
            } else if (e.type == 'class') {
                $(innerDiv).css('background-color', 'rgba(236, 135, 192,0.3)');
                $(innerDiv).css('border', '1px solid rgba(215, 112, 173,0.3)');
            }

            document.getElementById(containerId).appendChild(innerDiv);
        }
    };


    // only loads when finding common-timeslot
    if ($location.path() == "/common-timeslot") {
        
        $('#legendModal').modal('show');
       
       $scope.commontimeOk = function () {
           $('#legendModal').modal('hide');
       };
        
        
        var timeUnit = 29;

        var durHour = parseInt($rootScope.hourMemory);
        var durMin = parseInt($rootScope.minMemory);
        if (durMin != 0) {
            durMin = durMin / 60;
        }

        var duration = durHour + durMin;

        var freeDay = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
        // find all the free whole day
        for (var j = 0; j < $rootScope.allEventsArray.length; j++) {
            var e = $rootScope.allEventsArray[j];
            var dayIndex = freeDay.indexOf(e.day);
            console.log(e.day);
            console.log(dayIndex);
            if (dayIndex > -1) {
                freeDay.splice(dayIndex, 1);
            }
        }
        console.log(freeDay);

        // set the time out
        setTimeout(function () {
            // free days
            for (var i = 0; i < freeDay.length; i++) {
                drawFreeSlot(7, 24, freeDay[i]);
            }


            if ($rootScope.allEventsArray.length > 0) {

                // events splited by day =========================
                var eventSplitbyDays = [];
                var eventPerDay = [$rootScope.allEventsArray[0]];
                var whichDay = $rootScope.allEventsArray[0].day;
                for (var i = 1; i < $rootScope.allEventsArray.length; i++) {
                    var e = $rootScope.allEventsArray[i];
                    if (e.day != whichDay) {
                        eventSplitbyDays.push(eventPerDay);
                        eventPerDay = [e];
                        whichDay = e.day;
                    } else {
                        eventPerDay.push(e);
                    }
                }
                eventSplitbyDays.push(eventPerDay);
                console.log(eventSplitbyDays);
                // ===============================================

                for (var i = 0; i < eventSplitbyDays.length; i++) {
                    var eventsArray = eventSplitbyDays[i];
                    // only 1 event, add before and after event =================
                    if (eventsArray.length == 1) {
                        console.log(eventsArray[0]);
                        var evt = eventsArray[0];
                        var evtFrom = getFromTime(evt);
                        var evtTo = getToTime(evt);
                        // draw free slot before event
                        if (evtFrom - 7 > duration) {
                            drawFreeSlot(7, evtFrom, evt.day);
                        }
                        // draw free slot after event
                        if (24 - evtTo >= duration) {
                            drawFreeSlot(evtTo, 24, evt.day);
                        }
                    } else { // more than 1 event on this day =====================
                        // free slot before first event
                        var firstEvt = eventsArray[0];
                        var firstEvtFrom = getFromTime(firstEvt);
                        // draw free slot before event
                        if (firstEvtFrom - 7 > duration) {
                            drawFreeSlot(7, firstEvtFrom, firstEvt.day);
                        }
                        // free slot after last event
                        var lastEvt = eventsArray[eventsArray.length - 1];
                        var lastEvtTo = getToTime(lastEvt);
                        // draw free slot after event
                        if (24 - lastEvtTo >= duration) {
                            drawFreeSlot(lastEvtTo, 24, lastEvt.day);
                        }
                        // loop through the in between
                        for (var j = 0; j < eventsArray.length; j++) {
                            // if this is not the last event of the day
                            if (j != eventsArray.length - 1) {
                                var evt1 = eventsArray[j];
                                var evt1To = getToTime(evt1);

                                var evt2 = eventsArray[j + 1];
                                var evt2From = getFromTime(evt2);

                                // draw free slot in between events
                                if (evt2From - evt1To >= duration) {
                                    drawFreeSlot(evt1To, evt2From, evt1.day);
                                }
                            }
                        }
                    }
                }
                // events of attendees
                for (var i = 0; i < $rootScope.allEventsArray.length; i++) {
                    var e = $rootScope.allEventsArray[i];

                    var startFrom = (getFromTime(e) - 7) * timeUnit + 'px';
                    var height = (getToTime(e) - getFromTime(e)) * timeUnit + 'px';

                    var innerDiv = document.createElement('div');
//                innerDiv.innerHTML = e.title;
                    innerDiv.className = "addDiv";
                    innerDiv.onclick = function () {
//                        callMe(this);
                    };
                    $(innerDiv).css('top', startFrom);
                    $(innerDiv).css('height', height);

                    $(innerDiv).css('background-color', '#CCD1D9');
                    $(innerDiv).css('border-top', '1px solid #CCD1D9');
                    $(innerDiv).css('border-bottom', '1px solid #CCD1D9');
                    $(innerDiv).css('border-left', '1px solid #AAB2BD');
                    $(innerDiv).css('border-right', '1px solid #AAB2BD');


                    document.getElementById('cts' + e.month + e.day).appendChild(innerDiv);
                }
            }
        }, 10);// close time out

        var callMe = function (element) {
            console.log(element);
            console.log($(element).css('top'));
            console.log($(element).parent().attr("id").substring(6));

            var time = parseInt($(element).css('top').slice(0, -2));
            time = Math.floor(time / 29 + 7);

            if (time < 10) {
                time = "0" + time;
            }

            $rootScope.selectedTime = $(element).parent().attr("id").substring(6) + " Oct 2014, " + time + ":00";
            window.location = 'index.html#/group-meeting';
        };

        var getFromTime = function (e) {
            var fHour = parseInt(e.from.substring(0, 2));
            var fMin = parseInt(e.from.substring(3));
            if (fMin != 0) {
                fMin = fMin / 60;
            }
            return fHour + fMin;
        };

        var getToTime = function (e) {
            var tHour = parseInt(e.to.substring(0, 2));
            var tMin = parseInt(e.to.substring(3));
            if (tMin != 0) {
                tMin = tMin / 60;
            }
            return tHour + tMin;
        };

        var drawFreeSlot = function (start, end, day) {
            // loop through all day time
            for (var k = start; k <= (end - duration); k++) {

                var startFrom = (k - 7) * timeUnit + 'px';
                var height = timeUnit + 'px';

                var innerDiv = document.createElement('div');
                innerDiv.className = "addDiv";
                innerDiv.onclick = function () {
                    callMe(this);
                };
                $(innerDiv).css('top', startFrom);
                $(innerDiv).css('height', height);

                $(innerDiv).css('background-color', 'rgba(72, 207, 173,0.3)');
                $(innerDiv).css('border', '1px solid rgba(55, 188, 155, 0.3)');

                document.getElementById('ctsOct' + day).appendChild(innerDiv);
            }
        };

    } else { // close if for common timeslot
        
        $rootScope.url = $location.path();
    }
//    });
});

letssmuApp.controller('eventsDetailsController', function ($scope, $firebase, $rootScope) {
    
    $scope.showGroupExit = function() {
        $('#exitGroupModal').modal('show');
    };
    $scope.hideGroupExit = function() {
        $('#exitGroupModal').modal('hide');
    };
    
    $scope.deleteMeeting = function() {
        
        var ref = new Firebase("https://luminous-heat-6155.firebaseio.com/Users/"+$rootScope.thisUser+"/calendar/5/event");
        var sync = $firebase(ref);
        sync.$remove(0);
//        var attendeesList = sync.$asArray();
//        console.log(attendeesList);
//        var toDelete = attendeesList[1];
//        attendeesList.$remove(toDelete);
        $('#exitGroupModal').modal('hide');
        setTimeout(function () {
            window.location = 'index.html#/events';
        }, 500);
        
    };
    
    $scope.goBack = function () {
        history.back();
    };
    
    $scope.events = $rootScope.event;
    $scope.attendees = $rootScope.event.attendees;

    $scope.editEnabled = function () {
        $("#editBtn").hide('slow');
        $("#saveBtn").show('slow');
        $(".form-control").prop('disabled', false);
    };

    $scope.saveAndDisableEdit = function () {
        $("#saveBtn").hide('slow');
        $("#editBtn").show('slow');
        $(".form-control").prop('disabled', true);
        setTimeout(function () {
            alert("Updated Event Successfully");
        }, 1000);
    };

    $scope.buzzNone = function () {
        alert("No unconfirmed attendee to buzz");
    };

    $scope.buzz = function () {
//        alert("Buzzs sent to unconfirmed member successfully!");
        $('#buzzModal').modal('show');
         
         setTimeout(function () {
                $('#buzzModal').modal('hide');
        }, 1400);
   };

    $scope.redirectPage = function (e) {
        var type = e.type;
        if(type == "personal"){
            window.location = "index.html#/personal-event-edit";
        }else{
            window.location = "index.html#/group-meeting-edit";
        }
    };

    $scope.deleteEvent = function (event) {
        
        var calIndex = parseInt(event.day) + 1;
        
        for (var j = 0; j < $rootScope.usersData.length; j++) {
            
            // if matched, retrieved the user calendar and change the values
            if ($rootScope.usersData[j].$id == $rootScope.thisUser) {
                
                var calendarArr = $rootScope.usersData[j].calendar;

                for (var k = 0; k< calendarArr[calIndex].event.length; k++) {
                    console.log(calendarArr[calIndex].event);
                    
                    if (calendarArr[calIndex].event[k] == event.id) {
                        console.log("DELETED");
                        
                        if (calendarArr[calIndex].event.length == 1) {
                            calendarArr[calIndex].event = "";
                        } else {
                            calendarArr[calIndex].event.splice(k,1);
                        }
                        // save the data in database
                        $rootScope.usersData.$save(j);
                        break;
                    }
                }
                
                
            }
        }
        window.location = 'index.html#/events';
    };
    
    $scope.goToPage = function () {
        console.log('index.html#' + $rootScope.url);
        window.location = 'index.html#' + $rootScope.url;
    };
});

letssmuApp.controller('logOutController', function ($scope) {
    //setTimeout(function(){ window.location = "index.html#/login"; }, 5000);
});

// helper methods
// 
// compare date for sorting
function compare(a, b) {
    if (a.dateFrom < b.dateFrom) {
        return -1;
    } else if (a.dateFrom > b.dateFrom) {
        return 1;
    } else {
        if (a.dateTo > b.dateTo) {
            return 1;
        } else if (a.dateTo < b.dateTo) {
            return -1;
        }
        return 0;
    }
}