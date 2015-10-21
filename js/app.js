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
    $scope.demoVals = [];
        for(var i=0; i < $scope.sliderData.length;i++){
                $scope.demoVals.push($scope.sliderData[i].value);
    };
    $scope.span_funnel = 'span_funnel';
    $scope.span_roof_xsmall = 'span_roof_xsmall';
    $scope.span_bg_roof_border = 'span_bg_roof_border';
    $scope.span_balcony_front = 'span_balcony_front';
    $scope.span_bg_wall_left = 'span_bg_wall_left';
    $scope.span_door = 'span_door';
    $scope.span_window = 'span_window';
    $scope.span_window_big = 'span_window_big';
    $scope.span_bg_wall_right = 'span_bg_wall_right';
    $scope.span_bg_wall_right1 = 'span_bg_wall_right1';
    $scope.span_bg_wall_right2 = 'span_bg_wall_right2';
    $scope.span_bg_lining = 'span_bg_lining';
    $scope.span_bg_brick = 'span_bg_brick';
    $scope.span_floor = 'span_floor';
    $scope.floor = 'floor';
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
