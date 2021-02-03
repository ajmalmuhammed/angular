
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
    var len = (string.split(',').length);
    if(  len >3)
      newOutput = "Too much!";
    else if(len <= 3 && len>1 )
      newOutput = "Enjoy!"
    else if (len <=1)
      newOutput = "Please enter data first"
    
    console.log(newOutput);
    return newOutput;
   

}
}})();