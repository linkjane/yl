'use strict';
/**
* Created by Axiny on 2016/8/4.
*/

angular.module("routerApp")
    .controller("userSettingCtrl",[
        "$scope",
        "$state",
        "userSettingService",
        function($scope,$state,userSettingService){

            var datepicker1 = $('#dateTimePick1').datetimepicker({
                minView:"month",
                language:"zh"
            });

            var datepick2 = $('#dateTimePick2').datetimepicker({
                minView:"month",
                language:"zh"
            });

            //模态框用户类
            $scope.modalData =
            {
                "modalName":"",
                "":""
            };

            //按条件搜索用户类
            $scope.selectUserList =
            {
                "keyWord":"",
                "role":"角色不限",
                "sex":"性别不限",
                "startDate":"",
                "endDate":""
            };

            $scope.AddUser = function(){
                $scope.modalData.modalName = "添加新用户";
                userSettingService.addUser($scope.modalData);
            };

            $scope.updateUser = function(){
                $scope.modalData.modalName = "编辑用户";

            };

            //获取总注册人数
            userSettingService.getRegUserNum().then(function(res){
                $scope.regNum = res;
            });

            //获取全部用户信息
            userSettingService.getUserData().then(function(res){
                $scope.userData = res;
            });

            //获取一级科室
            userSettingService.getFirstDepName().then(function(DepName){
                $scope.FirstDepName = DepName;
            });

            //根据一级科室获取二级科室
            var getSecondDepName = function(data){
                userSettingService.getSecondDepName(data).then(function(res){

                });
            };

            //修改用户
            $scope.updateUser = function(){
                $scope.modalData.modalName = "编辑用户";
            };

            //删除用户
            $scope.deleteUser = function(data) {
                var delArray = [];

                angular.forEach($scope.userData, function(data) {
                    if (data.status) {
                        delArray.append(data.id);
                    }
                });

                if(delArray.length != 0){
                    data = delArray;
                    userSettingService.deleteUser(data).then(function(res){
                        //回掉函数
                    });
                }
                else{
                    alert("请至少选择一组数据后再点击删除");
                }
            };

            //按条件查找用户
            $scope.selectUser = function(){
                alert($scope.selectUserList.endDate);
            }
        }
    ]);