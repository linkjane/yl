/**
 * Created by Axiny on 2015/7/28.
 */
'use strict';//严格模式
angular.module('routerApp',[
    'ui.router'
])
.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$compileProvider',
        function($statProvider,$urlRouterProvider,$compileProvider){
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
            //更改默认安全协议
            $urlRouterProvider.otherwise('/login');
            //路由默认跳转
            /*路由部分
             $statProvider
                 .state('',{
                 url:'浏览器内路径'
                 templateUrl:'实际页面路径'
                 controller:'控制器'
                 })*/
            $statProvider
                .state('login',{
                    url:'/login',
                    templateUrl:'view/login.html',
                    controller:'loginCtrl'
                })
                .state('main',{
                    url:'/main',
                    templateUrl:'view/main.html',
                    controller:'mainCtrl'
                })
                .state('main.home',{
                    url:'/home',
                    templateUrl:'view/home.html',
                    controller:'homeCtrl'
                })
                .state('main.countAddUser',{
                    url:'/countAddUser',
                    templateUrl:'view/count_addUser.html',
                    controller:"countAddUserCtrl"
                })
                .state('main.countTotalUser',{
                    url:'/countTotalUser',
                    templateUrl:'view/count_totalUser.html',
                    controller:"countTotalUserCtrl"
                })
                .state('main.countSilentUser',{
                    url:'/countSilentUser',
                    templateUrl:'view/count_silentUser.html'
                })
                .state('main.countStartUp',{
                    url:'/countStartUp',
                    templateUrl:'view/count_startUp.html'
                })
                .state('main.countWeekUser',{
                    url:'/countWeekUser',
                    templateUrl:'view/count_weekUser.html'
                })
                .state('main.countActiveUser',{
                    url:'/countActiveUser',
                    templateUrl:'view/count_activeUser.html'
                })
                .state('main.countRetainedUser',{
                    url:'/countRetainedUser',
                    templateUrl:'view/count_retainedUser.html',
                    controller:"countRetainedUserCtrl"
                })
                .state('main.countNextDayKeepUser',{
                    url:'/countNextDayKeepUser',
                    templateUrl:'view/count_nextDayKeepUser.html'
                })
                .state('main.countNowAddUser',{
                    url:'/countNowAddUser',
                    templateUrl:'view/count_nowAddUser.html'
                })
                .state('main.userSetting',{
                    url:'/userSetting',
                    templateUrl:"view/userSetting.html",
                    controller:"userSettingCtrl",
                    resolve: {
                        pageInfo: [
                            'userSettingService',
                            '$q',
                            function (userSettingService, $q) {
                                var defer = $q.defer();
                                userSettingService.getUserDataNum().then(function (res) {
                                    defer.resolve(res);
                                });
                                return defer.promise;
                            }
                        ]
                    }
                })
                .state('main.classSetting',{
                    url:"/classSetting",
                    templateUrl:"view/classSetting.html",
                    controller:"classSettingCtrl",
                    resolve: {
                        classPageInfo: [
                            'classSettingService',
                            '$q',
                            function (classSettingService, $q) {
                                var defer = $q.defer();
                                classSettingService.getClassDataNum().then(function(res){
                                    defer.resolve(res);
                                });
                                return defer.promise;
                            }
                        ]
                    }
                })
                .state('main.sound',{
                    url:"/sound",
                    templateUrl:"view/contentModel/diagnostics/index.html",
                    controller: 'diagnosticCtrl'
                });
        }
    ]);
