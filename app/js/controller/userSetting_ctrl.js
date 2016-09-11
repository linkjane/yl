/**
* Created by Axiny on 2016/8/4.
*/
'use strict';//严格模式

angular.module("routerApp")
    .controller("userSettingCtrl",[
        "$scope",
        "$state",
        "userSettingService",
        'pageInfo',
        function($scope,$state,userSettingService,pageInfo){

            //配置dateTimePick
            $('#dateTimePick1').datetimepicker({
                minView:"month",
                language:'zh-CN',
                autoclose: true,
                todayBtn: true,
                pickerPosition: "bottom-left"
            });
            $('#dateTimePick2').datetimepicker({
                minView:"month",
                language:'zh-CN',
                autoclose: true,
                todayBtn: true,
                pickerPosition: "bottom-left"
            });

            //模态框用户类
            $scope.modalData =
            {
                "modalName":"",
                "ID":"",
                "Pass":"123456",
                "role":"非教师",
                "name":"",
                "sex":"-- 未设置 --",
                "FirstDepId":"",
                "SecondDepId":"",
                "imgUrl":""
            };
            //$scope.modalData =
            //{
            //    "ID":"",
            //    "mobilePhone":"",
            //    "password":"abc123",
            //    "role":"",
            //    "realname":"",
            //    "sex":"",
            //    "FirstDepId":"",
            //    "SecondDepId":"",
            //    "imgUrl":""
            //};

            //按条件搜索用户类
            $scope.selectUserList =
            {
                "keyWord":"",
                "role":"角色不限",
                "sex":"性别不限",
                "startDate":"",
                "endDate":""
            };
            //$scope.selectUserList =
            //{
            //    "key":"",
            //    "role":"角色不限",
            //    "sex":"性别不限",
            //    "regstartDate":"",
            //    "regendDate":""
            //};

            //翻页配置类
            $scope.paginationConf =
            {
                currentPage: 1,     //初始页码
                itemsPerPage: 50,   //每页显示条目
                totalItems: 0     //总条目数
            };

            //获取第一页用户信息
            userSettingService.getUserData($scope.paginationConf.currentPage).then(function(res){
                $scope.userData = res;
            });

            //获取总条目数
            $scope.paginationConf.totalItems = pageInfo.totalItems;

            //获取用户信息
            $scope.getUserData = function(){
                userSettingService.getUserData($scope.paginationConf.currentPage).then(function(res){
                    $scope.userData = res;
                })
            };

            //获取总注册人数
            userSettingService.getRegUserNum().then(function(res){
                $scope.regNum = res;
            });

            //当一级科室发生变化时获取二级科室
            $("#FirstDepName").change(function(){
                userSettingService.getSecondDepName($scope.modalData.FirstDepId).then(function(res){
                    $scope.SecondDepName = res;
                });
            });

            //选择执行操作  添加/编辑用户
            $scope.operation = function(){

                switch ($scope.modalData.modalName){
                    case "添加新用户":{
                        userSettingService.getUserCreate().then(function(res){
                            if(res){

                            }
                        });
                        userSettingService.addUser($scope.modalData).then(function(res){
                            var a = $scope.modalData;
                            console.log(a);
                            if(res == true){
                                alert("添加用户成功");
                            }
                            else{
                                alert("添加用户失败");
                            }
                        });
                        break;
                    }

                    case "编辑用户":{
                        userSettingService.updateUser($scope.modalData).then(function(res){
                            if(res == true){
                                alert("编辑用户成功");
                            }
                            else{
                                alert("编辑用户失败");
                            }
                        });
                        break;
                    }

                    default :{
                        break;
                    }
                }
            };

            //初始化添加用户
            $scope.creatAddUser = function(){
                $scope.modalData.modalName = "添加新用户";
                $scope.modalData.ID = "";
                $scope.modalData.role = "非教师";
                $scope.modalData.name = "";
                $scope.modalData.sex = "-- 未设置 --";
                $scope.modalData.FirstDepId = "";
                $scope.modalData.SecondDepId = "";
                $scope.modalData.tel = "";
                //获取一级科室
                userSettingService.getFirstDepName().then(function(res){
                    $scope.FirstDepName = res;
                });
                //获取二级科室
                userSettingService.getSecondDepName($scope.modalData.FirstDepId).then(function(res){
                    $scope.SecondDepName = res;
                });
            };

            //初始化修改用户
            $scope.getUpdateUser = function(userlist){
                userSettingService.getUpdateUser(userlist.ID).then(function(res){
                    $scope.modalData = res;
                    $scope.modalData.modalName = "编辑用户";
                });
                userSettingService.getFirstDepName().then(function(res){
                    $scope.FirstDepName = res;
                });
            };

            //删除单个用户
            $scope.deleteUserForID = function(userlist){
                userSettingService.deleteUserForID(userlist.ID).then(function(res){

                    if(res == true){
                        alert("删除成功");
                    }
                    else{
                        alert("删除失败");
                    }
                })
            };

            //批量删除用户
            $scope.deleteUser = function() {
                var delArray = [];

                angular.forEach($scope.userData, function(userIdList) {
                    if (userIdList.status) {
                        delArray.push(userIdList.ID);
                    }
                });

                if(delArray.length != 0){
                    userSettingService.deleteUser(delArray).then(function(res){
                        if(res == true){
                            alert("删除用户成功");
                            $scope.go("main.userSetting");
                        }
                        else{
                            alert("删除用户失败");
                        }
                    });
                }
                else{
                    alert("请至少选择一组数据后再点击删除");
                }
            };

            //按条件查找用户
            $scope.selectUser = function(){
                $scope.selectUserList.startDate = $('#startDate').val();
                $scope.selectUserList.endDate = $('#endDate').val();

                userSettingService.selectUser($scope.selectUserList).then(function(res){

                    if(res.length > 0){
                        $scope.userData = res;
                    }
                    else
                    {
                        alert("查找结果为空");
                        $state.go("main.userSetting");
                    }
                });

            };
        }

    ]);