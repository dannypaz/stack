angular.module('app', [])

.controller('makeOrderController', function ($scope, $timeout, $ionicLoading) {
  $scope.searchKeyword = $scope.searchKeyword || {}; // Define and check.

  $scope.searchMenuFilter = function () {
    return function (data) {
      if (data != undefined) {
          var result = JSLINQ(data)
              .Where(function (item) { 
                return item.name.match(/\b(\w)/g).join('') == $scope.searchKeyword // not defined anywhere
              });
          console.log($scope);
          console.log($scope.searchKeyword); // not defined anywhere
          return result.items;
      }
      else {
          return null;
      }
    }
  }
});