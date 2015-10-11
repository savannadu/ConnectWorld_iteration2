/**
 * Created by Savanna on 7/10/2015.
 */
var connectWorld = angular.module('connectWorld',[]);
connectWorld.controller('myProfileController', ['$scope', function ($scope) {
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

    $scope.update = function (basicInfo, language, interestTags) {
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);

    };

    $scope.reset = function (form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);
    };

    $scope.reset();
}]);

connectWorld.controller('peopleProfileController', ['$scope', function ($scope) {
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
    $scope.edit = function () {
        var x = document.getElementById("editProfile");
        var text = "";
        var i;
        for (i = 0; i < x.length; i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    };
    $scope.setVisibility = function (idHide, idDisplay) {
        document.getElementById(idHide).style.display = "inline";
        document.getElementById(idDisplay).style.display = "none";
    };

    $scope.update = function (basicInfo, language, interestTags) {
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);

    };

    $scope.reset = function (form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);
    };

    $scope.reset();
}]);
/*
connectWorld.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
*/
