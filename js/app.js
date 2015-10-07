var app = angular.module("app",['ngRoute']);
app.controller('mainCtrl', function($scope, $http){
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

    var getPhoto = function(key) {
        for(var i = 0; i < $scope.fotoMaps.length; i++) {
            if ($scope.fotoMaps[i].key === key) {
                return $scope.fotoMaps[i];
            }
        }
    };

    $scope.hoverMap = function(key){
        $scope.mainImgMapVisible = false;
        var photo = getPhoto(key);
        if (photo) {
            photo.visible = true;
        }
    };
    $scope.leaveMap = function(key){
        $scope.mainImgMapVisible = true;
        var photo = getPhoto(key);
        if (photo) {
            photo.visible = false;
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
