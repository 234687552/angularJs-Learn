app.controller('headCtrl', function ($scope, $location) {
    // Public.
    // "navItems"存储着导航栏的栏目。

    console.log("headCtrl instance");
    $scope.navItems = [
        {
            id: 1,
            title: 'Home',
            locationUrl: '/',
            href: '#'
        },
        {
            id: 2,
            title: 'About Me',
            locationUrl: '/aboutMe',
            href: '#'
        },
        {
            id: 3,
            title: 'Management',
            locationUrl: '/manageHome',
            href: '#'
        }
    ];

    // 栏目click时触发的方法。
    $scope.itemClick = function (id) {
        $scope.selectedId = id;
    };

});