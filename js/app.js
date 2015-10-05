var app = angular.module("app",['ngRoute']);
app.controller('mainCtrl',function($scope,$http){
    $http.get("./js/data.json").success(function(data){
        $scope.fotoMaps = data.city;
        console.log($scope.fotoMaps.city);
    });
    $scope.oblasti = [
        {
           name:"Минская",
           temp: -1.6,
           period: 202
        },
        {
            name:"Брестская",
            temp: 0.2,
            period: 187
        },
        {
            name:"Гродненская",
            temp: -0.5,
            period: 194
        },
        {
            name:"Витебская",
            temp: -2,
            period: 207
        },
        {
            name:"Магилевская",
            temp: -1.9,
            period: 204
        },
        {
            name:"Гомельская",
            temp: -1.6,
            period: 194
    }];
    $scope.selected= $scope.oblasti[0];


});
app.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
    $routeProvider.when('/index.html',{
        templateUrl:"/RockwoolCalc/step1.html"
    });
    $routeProvider.when('/step2',{
        templateUrl:"/RockwoolCalc/step2.html"
    })
});
