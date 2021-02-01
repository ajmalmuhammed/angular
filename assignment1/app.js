( function () {

'use strict';
var app = angular.module("LunchCheck", []);
app.controller("LunchCheckController",LunchCheckController); 

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.output = "";
  $scope.values="";


  $scope.display = function () {
    console.log("values:")
    console.log($scope.values);
    var noOfItems = calNos($scope.values);
    $scope.output = noOfItems;
    

  };
  function calNos(string) {
    var newOutput="";
    if( (string.split(',').length) >3)
      newOutput = "Too much!";
    else 
      newOutput = "Enjoy!"
    
    return newOutput;

}
}});