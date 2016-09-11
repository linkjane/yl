/**
 * Created by Axiny on 2016/8/17.
 */
'use strict';//严格模式

var app = angular.module("routerApp");
app.factory('classSettingService',[
    "$http",
    "$q",
    function($http,$q){

        //获取群组总数
        var getRegClassNum = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/regUserNum.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select classNum clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select classNum error");
                });

            return defer.promise;
        };

        //获取群组总条目数
        var getClassDataNum = function(){
            var defer = $q.defer();
            $http({
                method:"GET",
                url:"json/pageItems.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select classNum clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select classNum error");
                });

            return defer.promise;
        };

        //获取群组数据至table
        var getClassData = function(data){  //data：页码
            var defer = $q.defer();
            $http({
                method:"POST",
                data:data,
                url:"json/classData.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select classData clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select classData error");
                });

            return defer.promise;
        };

        //获取需要编辑的群组信息
        var getUpdateClass = function(data){  //data：获取需要编辑的用户信息
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"json/getUpdateClass.json",
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
        var getSecondDepName = function(data){  //data：一级科室ID
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

        //查询用户 至 增加用户到群组模态框中
        var selectUserForClass = function(data){  //data：查询条件
            var defer = $q.defer();
            $http({
                method:"POST",
                data:data,
                url:"json/selectUserForClass.json"
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select UserForClass error");
                });

            return defer.promise;
        };

        //查询用户是否已经在当前群组中
        var getUserInClass = function(data){  //data：用户id
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

        //获取创建用户是否已经存在
        var getUserCreate = function(data){  //data：用户id
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add UserForClass error");
                });

            return defer.promise;
        };

        //根据条件查找群组
        var selectClass = function(data){  //data：查询字段 关键字 活跃度 创建日期
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"json/getUpdateUser.json",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("select keyData clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("select keyData error");
                });

            return defer.promise;
        };

        //修改群组信息
        var updateClass = function(data){  //data：群组信息字段
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"json/getUpdateUser.json",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("update class clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("update class error");
                });

            return defer.promise;
        };

        //添加用户至群组
        var addUserForClass = function(data){  //data：用户id 组成的list
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add UserForClass error");
                });

            return defer.promise;
        };

        //添加用户
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

        //从群组中删除用户
        var delUserForClass = function(data){  //data：用户id 组成的list
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add UserForClass error");
                });

            return defer.promise;
        };

        //批量删除群组
        var deleteClass = function(data){  //data：群组ID list
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add UserForClass error");
                });

            return defer.promise;
        };

        //通过ID删除群组
        var deleteClassForID = function(data){
            var defer = $q.defer();
            $http({
                method:"POST",
                url:"",
                data:data
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    console.log("add UserForClass clear");
                })
                .error(function(data,status,headers,config){
                    defer.resolve(data);
                    console.log("add UserForClass error");
                });

            return defer.promise;
        };

        //暴露数据服务接口
        return{
            getRegClassNum:getRegClassNum,
            getClassDataNum:getClassDataNum,  //获取群组总数
            getClassData:getClassData,  //获取群组数据至table  data:页码
            getUpdateClass:getUpdateClass,  //获取需要编辑的群组信息  data：获取需要编辑的用户信息
            getFirstDepName:getFirstDepName,  //获取一级科室名称
            getSecondDepName:getSecondDepName,  //获取二级科室名称  data：一级科室ID
            getUserInClass:getUserInClass,  //查询用户是否已经在当前群组中  data：用户id
            getUserCreate:getUserCreate,  //获取用户是否已经存在  data：用户id

            selectUserForClass:selectUserForClass,  //查询用户 至 增加用户到群组模态框中  data：查询条件
            selectClass:selectClass,  //根据条件查找群组  data：查询字段 关键字 活跃度 创建日期

            updateClass:updateClass,  //修改群组信息  data：群组信息字段

            addUserForClass:addUserForClass,  //添加用户至群组  data：用户id 组成的list
            addUser:addUser,  //添加用户  data：用户信息

            delUserForClass:delUserForClass,  //从群组中删除用户  data：用户id 组成的list
            deleteClass:deleteClass,  //批量删除群组
            deleteClassForID:deleteClassForID  //通过ID删除群组
        };
    }
]);