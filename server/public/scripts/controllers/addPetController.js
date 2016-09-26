myApp.controller("addPetController", ["$scope", "$http", function( $scope, $http ){
  console.log("addPetController hit");
  // on click for add pet button
  $scope.addPet = function(){
    console.log('in addPet:', $scope.nameIn);
    //object to sent to db
    var newPet = {
      petName: $scope.nameIn,
      animal: $scope.animalIn,
      age: $scope.ageIn,
      imageUrl:$scope.pictureIn
    }; // end new pet
    console.log(newPet);
    //post call to add pet
    $http({
      method: 'POST',
      url: '/addPet',
      data: newPet
    }).then(function( response ){
      console.log( response);
    }); // end response
  }; // end addPet
}]); // end controller
