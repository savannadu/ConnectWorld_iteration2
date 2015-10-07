/**
 * Created by Savanna on 7/10/2015.
 */
var connectWorld = angular.module('connectWorld',[]);
connectWorld.controller('myProfileController', function($scope) {
    $scope.basicInfo =
        {
            "profilePic": "../img/buddyProfilePic.png",
            "gender": "mild",
            "birthday": new Date('1989', '10', '10'),
            "nationality": "Singaporean",
            "location": "North East, Singapore"
        };
    $scope.language =
        {
            "proficient": "English, Mandarine",
            "interested": "Japanese, French"

        };
    $scope.interestTags = [
        {"tag": "Cooking"},
        {"tag": "Travel"}
    ];
    });

