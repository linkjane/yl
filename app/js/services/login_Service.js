/**
 * Created by Axiny on 2016/8/4.
 */
'use strict'//严格模式

var app = angular.module("routerApp");
app.factory('loginService', [
        "$http",
        "$q",
        function($http,$q){
            var defer = $q.defer();
            var getLoginData = function(){
                $http({
                    method: 'POST',
                    url: 'json/login.json'
                })
                    .success(function(data, status, headers, config){
                        defer.resolve(data);
                        console.log("select data clear");
                    })
                    .error(function(data,status,headers,config){
                        defer.resolve(data);
                        console.log("select data error");
                    });

                return defer.promise;
            };

            return {
                getLoginData : getLoginData
            };
        }
    ]
);