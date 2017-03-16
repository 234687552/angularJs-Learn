
var app = angular.module('app');
app.controller('footCtrl', function ($scope) {
    // 底部一直置底
    $scope.foot = {
        "position": "absolute",
        "bottom": "0",
        "width": "100%",
        "color": "blue",
        "text-align": "center"
    }

});