var App = angular
    .module('App', [
        //'ui.router'
    ])
App.controller("StateProvider", function StateProvider($scope) {
    $scope.title = "Home";
    $scope.items = ['item1', 'item2', 'item3'];
});