
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
    var textOutput;
    if ($scope.values == "" )
       textOutput = " Please enter data first";

    else 
      textOutput = calNos($scope.values);

    $scope.output = textOutput;
    

  };
  function calNos(string) {
    var newOutput="";
    var len = (string.split(',').length);
    if(  len >3)
      newOutput = "Too much!";
    else if(len <= 3 && len>=1 )
      newOutput = "Enjoy!"
    // else if (len <=1 )
    //   newOutput = "Please enter data first"
    console.log(len);
    console.log(newOutput);
    return newOutput;
   

}
}})();