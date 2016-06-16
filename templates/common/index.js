define(function() {
    //框架
    require("angular");

    require("angular-cookies");

    require("angular-ui-router");
    require("angular-ui-bootstrap");

    angular.module("<%= appname %>", [
        "ui.router", "ui.bootstrap", "ngCookies",
    ]).controller("<%= appname %>Ctrl", [
        "$rootScope", "$state",
        function ($rootScope, $state) {
            $rootScope.app = {
                layout: {
                    isCollapsed: false
                },
            };
        }
    ]);

    // 同步的controller都放到下面的注释下,不要修改该注释！
    // {{controller
    require("./controllers/sidebarCtrl"); // 侧边导航
    require("./controllers/headerCtrl"); // 导航
    // controlller}}

    var app = angular.module("<%= appname %>");
    app.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider",
        function($stateProvider, $urlRouterProvider, $controllerProvider) {
            app.registerCtrl = $controllerProvider.register;

            // router
            $urlRouterProvider.otherwise("app/index");

            $stateProvider.state("app", {
                url: "/app",
                abstract: true,
                template:'<div id="dddd" ui-view=""></div>'
            }).state("app.index", {
                url: "/index",
                template:"<h1>Hellow world!</h1>"
            });
        }
    ]);
});
