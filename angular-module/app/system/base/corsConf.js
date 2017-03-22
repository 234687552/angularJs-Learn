/**
 * Created by My on 2017-03-21.
 */
// 跨域处理
http://blog.csdn.net/dalangzhonghangxing/article/details/51994812
define(['app'], function (app) {
    'use strict';
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common = {'Access-Control-Allow-Origin': '*'}
    }])
});