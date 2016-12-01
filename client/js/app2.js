var app = angular.module('mapp', ['lbServices']);
app.controller('myCtrl', ['$scope', 'Todomysql','User', function($scope,Todomysql,User) {
  $scope.name = "John Doe";
  $scope.todos=[];
   //$scope.all=Todomysql.find()
  function getTodos() {
    Todomysql
      .find()
      .$promise
      .then(function(results) {
        $scope.todos = results;
      });
  }
  getTodos();


  User.login({email: "me@domain.com", password: "secret", rememberMe: true});
  console.log(User.isAuthenticated());
}]);


//curl -X POST -H "Content-Type:application/json" -d '{"email": "me@domain.com", "password": "secret"}'   http://localhost:3000/api/users
