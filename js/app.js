var app = angular.module("app",['ngRoute']);
app.controller('mainCtrl', function($scope, $http, $location){
    $http.get("./js/data.json").success(function(data){
        $scope.oblastiMaps = data.city;
        $scope.minsk = $scope.oblastiMaps[0];
        $scope.selected = $scope.minsk;
        console.log($scope.oblastiMaps[1].name)
    });
    $scope.mainImgMapVisible = true;

    var getPhoto = function(key) {
        for(var i = 0; i < $scope.oblastiMaps.length; i++) {
            if ($scope.oblastiMaps[i].key === key) {
                return $scope.oblastiMaps[i];
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
    };

    $scope.clickSelected = function(key){
        for(var i=0; i < $scope.oblastiMaps.length;i++){
            if($scope.oblastiMaps[i].key === key){
                $scope.selected = $scope.oblastiMaps[i];
            }
        }
    };
    $scope.nextPage = function(){
      $location.path("/step2.html");
    };
});
app.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
    $routeProvider.when('/index.html',{
        templateUrl:"/RockwoolCalc/step1.html"
    });
    $routeProvider.when('/step2.html',{
        templateUrl:"/RockwoolCalc/step2.html"
    })
});
