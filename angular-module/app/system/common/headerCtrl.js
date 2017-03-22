/**
 * Created by My on 2017-03-22.
 */
define(['app'], function (app) {
    'use strict';
    app.controller('headerCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: './system/json/header.json'
        }).then(function successCallback(response) {
            $scope.headers = response.data.headers;
            console.log(response.data.header);
        }, function errorCallback(response) {
            console.log(response);
        });
    })
});