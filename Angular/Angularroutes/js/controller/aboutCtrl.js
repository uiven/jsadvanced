angular.module('App')
App.controller('aboutCtrl', ['$scope','Friends', function ($scope, Friends) {
    $scope.title = "about";
    $scope.friends = Friends.get();

    $scope.items = ["items4", "items5", "items6"];

}]);