define(function () {
    angular.module("<%= appname %>").controller("HeaderCtrl", [
        function () {
            var vm = this;
            vm.userInfo = {
                userName : "shenshen"
            }
        }
    ])
});

