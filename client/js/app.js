var app = angular.module('app1',['lbServices']);

app.controller('app1Controller',
  ['$scope','Todos',function($scope,Todos){
      $scope.newTodo={
        name:"",
        desc:"",
        important:false
      }
      $scope.aggiungitodo=function(){
        console.log($scope.newTodo);
      }

      $scope.cancellatodo=function(idtodo){
        console.log("cancella"+idtodo);
      }

      $scope.eseguitodo=function(idtodo){
        console.log("esegui"+idtodo);
      }

    function getTodos() {
    Todos
      .find()
      .$promise
      .then(function(results) {
        $scope.todos = results;
        console.log(results);
      });
  }
  getTodos();
}]);
