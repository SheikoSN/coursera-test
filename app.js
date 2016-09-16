angular.module('myApp',[])
    .controller('LunchCheckController', function($scope){
      $scope.menu='';
           $scope.response = "";
 	
 		$scope.text =function (){

 	
 		var lengthOfArray = 0;
  	if($scope.menu != null && $scope.menu != '') {
      lengthOfArray = $scope.menu.split(',').length;
    }
 		if (lengthOfArray <2){
 		$scope.response="Please enter data first";
 		}
       else if(lengthOfArray <= 3 ){
   $scope.response = "Enjoy!";
      }
       else if(lengthOfArray > 3){
        $scope.response='Too much!!';
       }
   }
    
});


    