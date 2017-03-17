app.controller('headCtrl', function ($scope, $location) {
    // Public.
    // "navItems"存储着导航栏的栏目。
    $scope.navItems = [
        {
            title: 'Home',
            locationUrl: '/',
            href: '#'
        },
        {
            title: 'About Me',
            locationUrl: '/aboutMe',
            href: '#'
        },
        {
            title: 'Management',
            locationUrl: '/manageHome',
            href: '#'
        }
    ];

    // // .selectedNavItem变量存储当前选择项，默认的选择项是"Home"。
    // $scope.selectedItem = $scope.navItems[0];
    // 栏目click时触发的方法。
    $scope.itemClick = function (navItem) {
        $scope.selectedItem = navItem;
    };

});