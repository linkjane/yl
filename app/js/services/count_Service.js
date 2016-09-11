/**
 * Created by Axiny on 2016/8/29.
 */
'use strict';//严格模式
var app = angular.module("routerApp");
app.factory('countService',[
    '$http',
    '$q',
    function($http, $q){
        var getAddUserCount = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/lineData.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select regNum clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select regNum error");
                });

            return defer.promise;
        };

        var getRetainedUser = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/retainedUser.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select regNum clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select regNum error");
                });

            return defer.promise;
        };

        return{
            getAddUserCount:getAddUserCount,
            getRetainedUser:getRetainedUser
        }
    }
]);