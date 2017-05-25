(function(){
  angular.module("LunchCheck",[])
        .controller("LunchCheckController", function($scope){
          $scope.message = "Please enter data first";
          $scope.lunchList = "";
          $scope.check = function(){
            var foodItem = $scope.lunchList.split(",");
            if (foodItem.length > 3 ){
                $scope.message = "Too much!";
            }else if (foodItem.length > 0){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Please enter data first";
            }
          }
        });

})();
