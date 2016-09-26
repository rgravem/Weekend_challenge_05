var myApp = angular.module("myApp", ["ngRoute"]);
// route for partials
myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/addPet", {
        templateUrl: "/views/partials/addPet.html",
        controller: "addPetController"
      }).
      when("/view", {
        templateUrl: "/views/partials/view.html",
        controller: "viewController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]); // end route
