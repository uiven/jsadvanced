angular
  .module('app')
  .factory('Friends', function () {
      return {
          get: function () {
              return [
          { "name": "will", "age": 30, "isSpecial": false },
          { "name": "laura", "age": 25, "isSpecial": true }
              ];
          }
      };
  })
//another method
.factory('Friends', ['$http', function ($http) {
    return {
        get:function(){
            return $http.get('api/friends.json').then (function(response){
                return response.data;
            })
        }
    };
}])