/**
 * Created by My on 2017-03-21.
 */


define(['app'], function (app) {
    'use strict';
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //高版本的angularJs需要设置以下 ,不然 url会把 '/'转成 '%2f'
        $locationProvider.hashPrefix(''); //对应的要写成 href="#/About"
        // $locationProvider.hashPrefix('!');//对应的要写成 href="#!/About"
        $routeProvider
            .when('/', {template: '这是首页'})
            .otherwise({redirectTo: '/'});
    }]);

    return function addRoute(url, template) {
        app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when(url, template);
        }])
    }
});