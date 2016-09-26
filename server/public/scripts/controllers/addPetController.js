myApp.controller("addPetController", ["$scope", "$http", function( $scope, $http ){
  console.log("addPetController hit");
  
  $scope.addPet = function(){
    console.log('in addPet:', $scope.nameIn);
    var newPet = {
      petName: $scope.nameIn,
      animal: $scope.animalIn,
      age: $scope.ageIn,
      imageUrl:$scope.pictureIn
    }; // end new pet
    console.log(newPet);
    $http({
      method: 'POST',
      url: '/addPet',
      data: newPet
    }).then(function( response ){
      console.log( response);
    });
  }; // end addPet
}]); // end controller
