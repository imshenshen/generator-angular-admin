define(function () {
    angular.module("<%= appname %>").controller("HeaderCtrl", [
        function () {
            var vm = this;
            vm.userInfo = {
                userName : "shenshen"
            }
            vm.onClickIsCollapsed=function(type){
                if($('.config-link').hasClass('open')){
                    if(type)
                        $("section").css({"margin-left":"220px"});
                    else
                        $("section").css({"margin-left":"330px"});
                }else{
                    if(type)
                        $("section").css({"margin-left":"70px"});
                    else
                        $("section").css({"margin-left":"180px"});
                }
            };
        }
    ])
});

