/**
 * Created by Savanna on 7/10/2015.
 */
connectWorld.controller('myProfileController', ['$scope', function ($scope) {
    $scope.basicInfo =
    {
        "fullname": "Jimmy Goh",
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
    $scope.tags = [
        {"text": "Cooking"},
        {"text": "Travel"},
        {"text": "Anime"},
        {"text": "Pokemon"}
    ];

    $scope.update = function (basicInfo, language, interestTags) {
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);

    };

}]);

connectWorld.controller('editMyProfileController', ['$scope', function ($scope) {

    $scope.basicInfo =
    {
        "fullname": "Jimmy Goh",
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
    $scope.tags = [
        {"text": "Cooking"},
        {"text": "Travel"},
        {"text": "Animie"},
        {"text": "Pokemon"}
    ];
    $scope.update = function (basicInfo, language, interestTags) {
        $scope.basicInfo = angular.copy(basicInfo);
        $scope.langugae = angular.copy(language);
        $scope.master = angular.copy(interestTags);

    };

}]);

