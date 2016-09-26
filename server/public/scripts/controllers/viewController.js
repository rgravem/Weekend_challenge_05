myApp.controller("viewController", ["$scope", "$http", "$route", function($scope, $http, $route){
  console.log("viewController hit");

  $http({
    method:'PUT',
    url:'/all',
  }).then(function(response){
  var array = response.data;
  console.log('this is the array:', array);
  $scope.dataToDom = array;
  });//then

  $scope.removePet = function(){
    var objectToSend = { id: this.x._id };
    console.log(objectToSend);

    $http({
      method:'PUT',
      url: '/removePet',
      data: objectToSend
    }).then(function(response){
      console.log('got this back on delete:', response);
    }); // end response

    $route.reload();
  };// end remove pet
}]);// end controller
