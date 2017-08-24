var app = angular.module("myApp", []);

app.config(function(){
    Stamplay.init("blogitkgp");
})

app.controller("myCtrlr", function($scope){
    $scope.fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
});