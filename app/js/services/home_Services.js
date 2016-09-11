/**
 * Created by Axiny on 2016/8/5.
 */
'use strict'//严格模式

var app = angular.module('routerApp');
app.factory('homeService',[
    "$http",   //注入$http
    "$q",      //注入$q
    function($http,$q){

        var getChartData = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/lineData.json"
            })
                .success(function(data,status, headers, config){
                    defer.resolve(data);
                    console.log("select data clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select data error");
                });

            return defer.promise;
        };

        /*
        var functionName = function(){
             $http({
             method:"GET",              //获取数据的方式 GET POST
             url:"json/lineData.json"   //数据url
             })
             .success(function(data,status, headers, config){     //数据获取成功时
                 defer.resolve(data);
                 console.log("select data clear");
             })
             .error(function(data,status,headers,config){         //数据获取失败时
                 defer.resolve(data);
                 console.log("select data error");
             });

             return defer.promise;
        }
        */

        return{
            getChartData:getChartData      //返回函数接口
            /*functionName:functionName*/
        }
    }
]);