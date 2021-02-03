
// describe('Lunch Checker Tests',function(){
//     beforeEach(module('LunchCheck'));
//     var $controller,$rootScope;
//     beforeEach(inject(function(_$controller_, _$rootScope_){
     
//       $controller = _$controller_;
//       $rootScope = _$rootScope_;
//     }));
    
//     describe('$scope.display', function (){
//         it('Sets the out put to Enjoy if there are 3 items', function(){
//         var $scope = $rootScope.$new();
//         var controller = $controller('LunchCheckController', { $scope: $scope });
//        $scope.values="f1,f2,f3";
//        $scope.display();
//         expect($scope.output).toEqual("Enjoy");
//     });
// });
// });
describe('LunchCheckController', function() {

    beforeEach(module('LunchCheck'));
    var $controller,$rootScope;
    beforeEach(inject(function(_$controller_,_$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));
    describe('$scope.display',function(){
    it('greets', function() {
        var $scope = $rootScope.$new();
        var controller = $controller('LunchCheckController', {
            $scope: $scope
        });
        $scope.values="f1,f2,f3";
        $scope.display();
        expect($scope.output).toEqual("Enjoy!");
    });

});
});