/**
 * Created by Axiny on 2015/7/28.
 */
'use strict'//严格模式

angular.module('routerApp')
    .controller('loginCtrl',[
        //注入部分
        '$scope',
        '$state',
        'loginService',
        function($scope,$state,loginService){
            $scope.user =
            {
                "userID":"",
                "userPass":""
            };
            $scope.login = function(){
                loginService.getLoginData().then(function(res){
                    if($scope.user.userID == res.userID && $scope.user.userPass == res.userPass){
                        $state.go('main.home');//跳转页
                    }
                    else{
                        alert("账号或密码错误");
                    }
                });
            };
        }
    ]);
