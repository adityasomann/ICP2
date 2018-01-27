var app1= angular.module('weatherapp',[]);

app1.controller('WeatherCntrl', function ($scope,$http) {


    $scope.myfunction= function (my) {


        $http.get("http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/" + my.statecode +"/"+ my.city +".json").then(function (response) {

            $scope.data1 = response.data;
            $scope.temp = response.data.current_observation.temp_f;
            $scope.weather = response.data.current_observation.weather;
            $scope.wind = response.data.current_observation.wind_mph;
            $scope.press = response.data.current_observation.pressure_mb;
            $scope.humidity = response.data.current_observation.relative_humidity;
            $scope.icon = response.data.current_observation.icon_url;
            $scope.currenticon={ html: "<img src='" + icon + "'/>"}

        });

    };

});