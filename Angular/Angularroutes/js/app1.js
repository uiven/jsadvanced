//angular.module('ng').filter('tel', function () { });
//var MyBlogApp = angular.module('MyBlogApp', []);
 var App = angular
    .module('App', [
        //'ui.router'
    ])
App.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
 
    $urlRouterProvider.otherwise('/'); 
    
    $stateProvider
  .state('home',{
      url:'/',
      //template: 'home'
      templateUrl: 'template/home.html',
      // controller: function ($scope) {
      //  $scope.title = "Home";
      //  $scope.items = ["items1", "items2", "items3"];
  //}
      //another method
      //controller: ['$scope',function (a) {
      //  a.title = "Home";
      //  a.items = ["items1", "items2", "items3"];
      //}]
      //}])
      //another method
        controller:'homeCtrl',
         resolve :{
             friends:['$http',function($http){//after declaring the frends.js file
            
                 return $http.get('/api/friends.json').then(function (response) {
                  return respose.data;
              })
             }]
             //after declaring the frends.js file

            // friends : ['Friends', function(Friends){
              //   return Friends.get();
            // }]
        }

       })
         .state('about', {
             url: '/about',
             //template: 'home'
             templateUrl: 'template/about.html',
             controller:'aboutCtrl'
         })
     }])  