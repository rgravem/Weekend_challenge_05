myApp.controller("addPetController", ["$scope", "$http", function( $scope, $http ){
  console.log("addPetController hit");
  $scope.allPets=[];
  $scope.addPet = function(){
    console.log('in addPet:', $scope.nameIn);
    var newPet = {
      petName: $scope.nameIn,
      animal: $scope.animalIn,
      age: $scope.ageIn,
      imageUrl:$scope.pictureIn
    }; // end new pet
    $http({
      method: 'POST',
      url: '/addPet',
      data: newPet
    }).then(function( response ){
      console.log( response);
    });
  }; // end addPet
}]); // end controller

// myApp.controller( 'poeDameron', [ '$scope', '$http', function( $scope, $http ){
//   $scope.allSongs=[];
//   $scope.addSong = function(){
//     console.log( 'in addSong:', $scope.badSong );
//     // can we put the bad song in an object?
//     var newSong = {
//       title: $scope.badSong,
//       artist: $scope.badArtist
//     }; // end new song
//     // test send via http to post route
//     $http({
//       method: 'POST',
//       url: '/testPost',
//       data: newSong
//     }).then(function( response ){
//     })
//     // can we push the bad song object into our array?
//     $scope.allSongs.push( newSong );
//     console.log( 'allSongs:', $scope.allSongs );
//   }; // end add song
// }]); // end controller
