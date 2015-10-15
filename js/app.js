var app = angular.module("app",['ngRoute','ui.slider']);
app.controller('mainCtrl', function($scope, $http, $location,$rootScope){
    $http.get("./js/data.json").success(function(data){
        $scope.oblastiMaps = data.city;
        $scope.buildingData = data.building;
        $scope.sliderData = data.sliders;
        $scope.selected = $scope.oblastiMaps[0];

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

app.controller("step2Ctrl",function($scope){
    $scope.selectBuild = $scope.buildingData[0];
    $scope.selectBuilding = $scope.buildingData;
/*    $scope.demoVals = {
        val1 : 4,
        val2 : 1,
        val3 : 7,
        val4 : 7,
        val5 : 2.5
    }*/
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
