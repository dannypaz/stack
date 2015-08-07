var app = angular.module('myApp', ['ui.grid']); // ui.grid included

app.controller('myCtrl', function($scope) {
  $scope.myData=[];

  var queryResponse =[
    {name: "name1", city:"city1"},
    {name: "name2", city:"city2"},
    {name: "name3", city:"city3"}, 
    {name: "name4", city:"city4"}, 
    {name: "name5", city:"city5"}, 
    {name: "name6", city:"city6"}, 
    {name: "name7", city:"city7"}
  ];

  // This was originally $scope.colDefs
  // error occured (angular didn't like colDefs on $scope)
  var colDefs = [
    {field: "name", width: 80},
    {field: "city"} 
  ];

  // This was originally $scope
  var filterOptions = {
    filterText: ""
  };

  $scope.pagingOptions = {
    pageSizes: [5, 10, 25],
    pageSize: 5,
    totalServerItems: 0,
    currentPage: 1
  };

  var setPagingData = function(data, page, pageSize) {
     var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
     $scope.myData = pagedData;
     $scope.pagingOptions.totalServerItems = data.length;
     if (!$scope.$$phase) {
         $scope.$apply();
     }
  };

  var getPagedDataAsync = function(pageSize, page) {
    setTimeout(function() {
      setPagingData(queryResponse, page, pageSize);
    }, 100);
  };

  $scope.$watch('pagingOptions', function() {
     getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
  }, true);

  $scope.gridOptions = {
     data: 'myData',
     columnDefs: colDefs,
     enablePaging: true,
     filterOptions: filterOptions,
     pagingOptions: 'pagingOptions',
     showFooter: true
  };
});