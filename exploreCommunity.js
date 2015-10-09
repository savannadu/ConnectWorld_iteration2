/**
 * Created by happyoyeah on 8/10/15.
 */
var app = angular.module('exploreCommunity', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {
    $scope.tags = [
        { id: 1, name: 'Cooking' },
        { id: 2, name: 'Reading' },
        { id: 3, name: 'Korean Drama' }
    ];
    $scope.loadTags = function(query) {
        return $http.get('tags.json');
    };
});
