var app = angular.module('app', []);

app.controller('authorisationCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.username = "";
    $scope.password = "";
    $scope.token = "";
    $scope.showBoolean = false;
    $scope.initalise = false;

    var host = "http://localhost:3000/";

    var authorise = function () {
        $http.get(host + "authorise?name=" + $scope.username + "&password=" + $scope.password)
            .then(function (response) {
                console.log('response', response.data);
                if(response.data != false) {
                    $scope.token = response.data;
                    console.log("$scope.token variable contains: ", $scope.token);
                    $scope.showBoolean = true;
                    $scope.initalise = false;
                }
                else{
                    console.log("$scope.token variable has not been set", $scope.token);
                    $scope.showBoolean = false;
                    $scope.initalise = true;
                }
            });
    };

    $scope.authorise = authorise;


}]);

