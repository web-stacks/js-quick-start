var skeletonApp = angular.module("skeletonApp", []);

var HelloCtrl = skeletonApp.controller("HelloCtrl", function($scope) {
  $scope.message = "Hello World!";
});
