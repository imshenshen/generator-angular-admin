define(function () {

    var app = angular.module("<%= appname %>");
    var _ = require("lodash");
    app.controller("SidebarController", [
        "$state", "$rootScope", "$scope",
        function ($state, $rootScope, $scope) {

            var vm = this;
            vm.menuItems = [{
                "text": "订单管理",
                "heading": "true",
                "translate": "sidebar.heading.COMPONENTS"
            }, {
                "text": "我的订单",
                "sref": "app.index",
                "icon": "fa fa-user"
            }];

            var collapseList = [];

            function isActive(item) {
                if (!item) {
                    return false
                }
                if( !item.sref || item.sref === '#') {

                    var foundActive = false;
                    angular.forEach(item.submenu, function(value) {
                        if(isActive(value)) foundActive = true;
                    });
                    return foundActive;
                }
                else
                    return $state.is(item.sref) || $state.includes(item.sref);

            }

            vm.toggleCollapse = function ($index, isParentItem) {


                // collapsed sidebar doesn't toggle drodopwn
                //if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) return true;

                // make sure the item index exists
                if (angular.isDefined(collapseList[$index])) {
                    if (!vm.lastEventFromChild) {
                        collapseList[$index] = !collapseList[$index];
                        closeAllBut($index);
                    }
                }
                else if (isParentItem) {
                    closeAllBut(-1);
                }

                vm.lastEventFromChild = isChild($index);

                return true;

            };

            vm.getMenuItemPropClasses = function (item) {
                return (item.heading ? 'nav-heading' : '') +
                    (isActive(item) ? ' active' : '');
            };

            vm.isCollapse = function (index) {
                return collapseList[index];
            };
            vm.addCollapse = function ($index, item) {
                //collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
                collapseList[$index] = false;
            };

            function closeAllBut(index) {
                index += '';
                for (var i in collapseList) {
                    if (index < 0 || index.indexOf(i) < 0)
                        collapseList[i] = true;
                }
            }

            function isChild($index) {
                return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }
        }
    ]);
});

