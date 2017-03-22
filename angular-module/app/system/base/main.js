/**
 * 入口文件
 * 2014-11-30 mon
 */
require.config({
    paths: {
        "jquery": "../../libs/jquery/jquery-3.2.0.min",
        "angular": "../../libs/angular/1.6.3/angular.min",
        "angular-route": "../../libs/angular/1.6.3/angular-route.min",
        "bootstrap": "../../libs/bootstrap/3.3.7/js/bootstrap.min",

        "app": "app",
        "websocketFactory": "./websocketFactory",
        "corsConf": "./corsConf",
        "baseRoute": "./baseRoute",
        "navRoute": "../common/navRoute",
        "headerCtrl": "../common/headerCtrl",
        "headRoute": "../common/headRoute",

        "userProfileCtrl": "../module/user/userProfileCtrl",
        "userSettingCtrl": "../module/user/userSettingCtrl"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ["angular"],
            exports: 'angular-route'
        },
        'bootstrap': {
            deps: ["jquery"],
            exports: 'bootstrap'
        }
    }
});


require(['jquery',
    'angular',
    'angular-route',
    'app',
    'websocketFactory',
    'corsConf',
    'baseRoute',
    'bootstrap',
    'navRoute',
    'headRoute',
    'userProfileCtrl',
    'userSettingCtrl',
    'headerCtrl'
], function ($, angular) {
    $(function () {
        angular.bootstrap(document, ['myApp']);
    })
});