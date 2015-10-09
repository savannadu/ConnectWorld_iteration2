/**
 * Created by Savanna on 7/10/2015.
 */
var connectWorld = angular.module('connectWorld',[]);
connectWorld.controller('myProfileController', function ($scope) {
    $scope.basicInfo =
    {
        "name": "Jimmy Goh",
        "profilePic": "../img/buddyProfilePic.png",
        "gender": "Male",
        "birthday": new Date('1989', '10', '10'),
        "nationality": "Singaporean",
        "location": "North East, Singapore",
        "mySelf": "I am pursuing a Master degree programme in Business Administration at Japan Tokyo University. I would like to improve my Japanese so that I will be able to integrate and adapt into the Japanese community as soon as possible."
    };
    $scope.language =
    {
        "proficient": "English, Mandarine",
        "interested": "Japanese, French"
    };
    $scope.interestTags = [
        {"tag": "Cooking"},
        {"tag": "Travel"},
        {"tag": "Animie"},
        {"tag": "Pokemon"}
    ];
    $scope.edit = function() {
        var x = document.getElementById("editProfile");
        var text = "";
        var i;
        for (i = 0; i < x.length ;i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    };
    $scope.setVisibility=function(idHide,idDisplay) {
        document.getElementById(idHide).style.display = "inline";
        document.getElementById(idDisplay).style.display = "none";
    };
});

connectWorld.controller('editMyProfileController', function ($scope,$http) {
    $scope.basicInfo =
    {
        "name": "Jimmy Goh",
        "profilePic": "../img/buddyProfilePic.png",
        "gender": "Male",
        "birthday": new Date('1989', '10', '10'),
        "nationality": "Singaporean",
        "location": "North East, Singapore",
        "mySelf": "I am pursuing a Master degree programme in Business Administration at Japan Tokyo University. I would like to improve my Japanese so that I will be able to integrate and adapt into the Japanese community as soon as possible."
    };
    $scope.language =
    {
        "proficient": "English, Mandarine",
        "interested": "Japanese, French"
    };
    $scope.interestTags = [
        {"tag": "Cooking"},
        {"tag": "Travel"},
        {"tag": "Animie"},
        {"tag": "Pokemon"}
    ];
    $scope.checkGender = function(data) {
        if (data !== 'FEMALE' && data !== 'MALE') {
            return "Username should be 'Female' or 'Male'";
        }
    };

    $scope.saveUser = function() {
        // $scope.user already updated!
        return $http.post('/saveUser', $scope.user).error(function(err) {
            if(err.field && err.msg) {
                // err like {field: "name", msg: "Server-side error for this username!"}
                $scope.editableForm.$setError(err.field, err.msg);
            } else {
                // unknown error
                $scope.editableForm.$setError('name', 'Unknown error!');
            }
        });
    };
});
/*
connectWorld.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
*/
