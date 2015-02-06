angular.module('App')
App.controller('homeCtrl',['$scope','Friends', function($scope,Friends) {
    $scope.title = "Home";
    $scope.friends = Friends.get();
        $scope.items = ["items1", "items2", "items3"];
        $scope.selectedValue = 'home';
        $scope.save = function () {
            alert(JSON.stringify($scope.friends));
            $http.Post('/api/friends', friends);
        };
}]);