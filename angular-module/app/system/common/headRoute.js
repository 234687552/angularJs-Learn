define(['baseRoute'], function (addRoute, socket) {
    'use strict';
    addRoute('/logout', {template: '退出'});
    addRoute('/resourceManage', {template: '资源管理'});
    addRoute('/agentManage', {template: '坐席管理'});
    addRoute('/userProfile', {
        templateUrl: 'system/module/user/userProfile.html',
        controller: 'userProfileCtrl'
    });
    addRoute('/userSetting', {
        templateUrl: 'system/module/user/userSetting.html',
        controller: 'userSettingCtrl'
    });
});