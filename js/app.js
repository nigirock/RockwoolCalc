var app = angular.module("app",['ngRoute']);
app.controller('mainCtrl',function($scope,$http){
    $http.get("./js/data.json").success(function(data){
        $scope.fotoMaps = data.city;
        console.log($scope.fotoMaps.city);
    });
    $scope.mainImgMapVisible = true;

    $scope.oblasti = [
        {
            name:"Минская",
            temp: -1.6,
            period: 202,
            visible: true
        },
        {
            name:"Брестская",
            temp: 0.2,
            period: 187
        },
        {
            name:"Гродненская",
            temp: -0.5,
            period: 196,
            visible: true
        },
        {
            name:"Витебская",
            temp: -2.1,
            period: 207,
            visible: true
        },
        {
            name:"Могилевская",
            temp: -1.9,
            period: 204,
            visible: true
        },
        {
            name:"Гомельская",
            temp: -1.6,
            period: 194,
            visible: true
    }];
    $scope.selected= $scope.oblasti[0];

    $scope.hoverMap = function(title){
        switch (title){
            case  "brest":
                $scope.mainImgMapVisible = false;
                $scope.fotoMaps[0].visible = true;
                break;
            case "grodno":
                break
        }
    };
    $scope.leaveMap = function(title){
        switch (title){
            case  "brest":
                $scope.mainImgMapVisible = true;
                $scope.fotoMaps[0].visible = false;
                break;
            case "grodno":
                break
        }
    }


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
