/**
 * Created by My on 2017-03-21.
 */
define(['app'], function (app) {
    app.controller("userProfileCtrl", function ($scope, $http) {
        $http({
            method: 'GET',
            url: './system/json/userProfile.json'
            // url: 'http://localhost:8080/'
        }).then(function successCallback(response) {
            console.log("请求成功:" + response.data.fund_name);
            $scope.username = response.data.fund_name;
        }, function errorCallback(response) {
            // 请求失败执行代码
            console.log("请求失败");
        });

    })
});