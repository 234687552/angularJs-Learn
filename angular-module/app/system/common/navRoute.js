// define(['app'], function (app) {
//     'use strict';
//     app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//         $routeProvider
//             .when('/', {template: '这是首页'})
//             .when('/group1-1', {template: '这是1页面'})
//             .when('/group1-2', {template: '这是2页面'})
//             .when('/group1-3', {template: '这是3页面'})
//             .when('/group1-4', {template: '这是4页面'})
//             .when('/group1-5', {template: '这是5页面'})
//             .when('/group1-6', {template: '这是6页面'})
//             .when('/group1-7', {template: '这是7页面'})
//             .otherwise({redirectTo: '/'});
//     }])
//
// });

define(['baseRoute'], function (addRoute) {
    'use strict';
    addRoute('/group1-1', {template: '这是1页面'});
    addRoute('/group1-2', {template: '这是2页面'});
    addRoute('/group1-3', {template: '这是3页面'});
    addRoute('/group1-4', {template: '这是4页面'});
    addRoute('/group1-5', {template: '这是5页面'});
    addRoute('/group1-6', {template: '这是6页面'});
    addRoute('/group1-7', {template: '这是7页面'});
});