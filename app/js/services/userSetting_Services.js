/**
 * Created by Axiny on 2016/8/5.
 */
'use strict';//严格模式
var app = angular.module("routerApp");
app.factory('userSettingService',[
    "$http",
    "$q",
    function($http,$q){

        //获取注册总人数
        var getRegUserNum = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/regUserNum.json"
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

        //获取需要编辑的用户信息
        var getUpdateUser = function(data){    //data：获取需要编辑的用户信息
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"json/getUpdateUser.json",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select UpdateUser clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select UpdateUser error");
                });

            return defer.promise;
        };

        //获取用户信息至table
        var getUserData = function(data){   //data：页码
            var defer = $q.defer();
            $http({
                method:"POST",
                data:data,
                url:"json/userData.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select UserData clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select UserData error");
                });

            return defer.promise;
        };

        //获取总条目数
        var getUserDataNum = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/pageItems.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select UserDataNum clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select UserDataNum error");
                });

            return defer.promise;
        };

        //获取一级科室名称
        var getFirstDepName = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/FirstDepName.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select FirstDepName clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select FirstDepName error");
                });

            return defer.promise;
        };

        //获取二级科室名称
        var getSecondDepName = function(data){   //data：一级科室ID
            var defer = $q.defer();
            $http({
                method:"GET",
                data:data,
                url:"json/SecondDepName.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select SecondDepName clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select SecondDepName error");
                });

            return defer.promise;
        };

        //查询用户是否已经存在
        var getUserCreate = function(data){  //data：用户id
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"json/getUpdateUser.json",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select UpdateUser clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select UpdateUser error");
                });

            return defer.promise;
        };

        //增加用户
        var addUser = function(data){     //data：添加的用户信息
            var defer = $q.defer();
            $http({
                method:"POST",
                data:data,
                url:""
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add User clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add User error");
                });

            return defer.promise;
        };

        //修改用户
        var updateUser = function(data){    //data：修改的用户信息
            var defer = $q.defer();
            $http({
                method:"POST",
                data:data,
                url:""
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("update User clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("update User error");
                });

            return defer.promise;
        };

        //批量删除用户
        var deleteUser = function(data){    //data：需要删除的用户ID list
            var defer = $q.defer();
            $http({
                method:"GET",
                data:data,
                url:""
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("delete User clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("delete User error");
                });

            return defer.promise;
        };

        //通过ID删除用户
        var deleteUserForID = function(data){    //data：需要删除的用户ID
            var defer = $q.defer();
            $http({
                method:"GET",
                data:data,
                url:""
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("delete User clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("delete User error");
                });

            return defer.promise;
        };

        //根据关键字查找相关用户
        var selectUser = function(data){    //data：关键字
            var defer = $q.defer();
            $http({
                method:"GET",
                data:data,
                url:""
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("delete User clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("delete User error");
                });

            return defer.promise;
        };

        //暴露数据服务接口
        return{
            getRegUserNum:getRegUserNum,  //获取总注册人数
            getUpdateUser:getUpdateUser,  //获取需要修改的用户信息    data：需要编辑的用户ID
            getUserData:getUserData,  //获取注册用户信息至table      data：页码
            getFirstDepName:getFirstDepName,  //获取一级部门名称
            getSecondDepName:getSecondDepName,  //获取二级部门名称   data：一级科室ID
            getUserDataNum:getUserDataNum,  //获取用户数据条目数
            getUserCreate:getUserCreate,  //获取用户是否已存在

            addUser:addUser,  //增加用户                           data：添加的用户信息

            updateUser:updateUser,  //修改用户                     data：修改的用户信息

            deleteUser:deleteUser,  //批量删除用户                  data：需要删除的用户ID list
            deleteUserForID:deleteUserForID,  //通过ID删除用户      data：需要删除的用户ID

            selectUser:selectUser  //根据关键字查找相关用户           data：关键字
        };
    }
]);