/**
 * Created by Axiny on 2016/8/11.
 */
'use strict';//严格模式
var routerApp = angular.module('routerApp');
routerApp.controller('classSettingCtrl',[
    "$scope",
    "$state",
    "classSettingService",
    "classPageInfo",
    function($scope,$state,classSettingService,classPageInfo){

        var addArray = [];  //群组增加成员list
        var delArray = [];  //群组删除成员list
        var tag = "";       //判定当前是否为添加新用户至群组 或 勾选查找用户

        $("#selectUser").click(function(){
            tag = "selectUser";
        });

        $("#addUser").click(function(){
            tag = "addNewUser";
        });

        //群组模态框配置类
        $scope.modalData =
        {
            "modalName":"",
            "ID":"",
            "className":"",
            "regTechName":"",
            "classNum":"",
            "classType":"活跃"
        };

        //按条件搜索用户类
        $scope.selectClassList =
        {
            "keyWord":"",
            "Type":"不限",
            "startDate":"",
            "endDate":""
        };

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

        //翻页配置类
        $scope.paginationConf =
        {
            currentPage: 1,     //初始页码
            itemsPerPage: 50,   //每页显示条目
            totalItems: 0     //总条目数
        };

        //群组模态框查找用户配置类
        $scope.seleteUser =
        {
            "keyWord":"",
            "role":"非教师"
        };

        //添加新用户并添加至当前群组
        $scope.addUser =
        {
            "name":"",
            "sex":"-- 未设置 --",
            "role":"非教师",
            "tel":""
        };

        //获取总条目数
        $scope.paginationConf.totalItems = classPageInfo.totalItems;
        classSettingService.getClassDataNum().then(function(res){
            $scope.regNum = res;
        });

        //获取第一页群组数据
        classSettingService.getClassData($scope.paginationConf.currentPage).then(function(res){
            $scope.classData = res;
        });

        //默认checkbox为隐藏状态
        $scope.inputStyle = "userCheckOFF";

        //更改checkbox为显示状态
        $scope.showCheck = function(){
            $scope.inputStyle = "userCheckON";
        };

        //初始化修改群组信息
        $scope.getUpdateClass = function(classlist){
            $scope.inputStyle = "userCheckOFF";
            classSettingService.getUpdateClass(classlist.ID).then(function(res){
                $scope.modalData = res;
                $scope.modalData.modalName = "编辑群组";
            });
        };

        //初始化查询用户 至 增加用户到群组模态框中查找用户
        $scope.addClassMember = function(){
            $scope.selectUser.keyWord = "";
            $scope.selectUser.role = "";
        };

        //根据条件查询群组信息
        $scope.selectClass = function(){
            classSettingService.selectClass($scope.selectClassList).then(function(res){
                $scope.classData = res;
            });
        };

        //查询用户 至 增加用户到群组模态框中
        $scope.selectUserForClass = function(){

            if($scope.seleteUser.keyWord != null)
            {
                classSettingService.selectUserForClass($scope.seleteUser).then(function(res){
                    $scope.userData = res;
                });
                $(".selectTable").hide();
            }
            else
            {
                alert("查询关键字不能为空!");
            }
        };

        //获取需要添加的用户至list
        $scope.addUserInClass = function(userlist){
            switch (tag){
                case "selectUser":{
                    angular.forEach($scope.userData, function(userlist){
                        if (userlist.status) {
                            classSettingService.getUserInClass(userlist.ID).then(function(res){
                                if(res){
                                    alert("您选取的部分用户已经在当前群组中");
                                }
                                else{
                                    $scope.modalData.classMember.push(userlist);  //将选定的用户临时添加至当前群组中
                                    addArray.push(userlist.ID);                   //将选定的用户id添加到需要上传的list中
                                }
                            });
                        }
                    });
                    break;
                }
                case "addNewUser":{
                    classSettingService.getUserCreate($scope.addUser.tel).then(function(res){
                        if(res){
                            alert("用户已经存在");
                        }
                        else{
                            classSettingService.addUser($scope.addUser).then(function(res){
                                if(res){
                                    $scope.modalData.classMember.push(userlist);  //将选定的用户临时添加至当前群组中
                                    addArray.push(userlist.ID);                   //将选定的用户id添加到需要上传的list中
                                    alert("添加新用户成功");
                                }
                                else{
                                    alert("添加失败");
                                }
                            });
                        }
                    });
                }
            }
        };

        //编辑群组页面
        $scope.saveClass = function(){

            //编辑状态
            var update = {
                add:"",
                del:"",
                updateClass:""
            };

            //群组信息筛选上传
            var classData = {
                ID:"",
                className:"",
                regTechName:"",
                classType:""
            };

            //获取需要删除的用户至list
            angular.forEach($scope.modalData.classMember,function(memberlist){
                if(memberlist.status){
                    delArray.push(memberlist.ID);
                }
            });

            if(addArray.length != 0){
                classSettingService.addUserForClass(addArray).then(function(res){
                    update.add = res;
                });
            }

            if(delArray.length != 0){
                classSettingService.delUserForClass(delArray).then(function(res){
                    update.del = res;
                });
            }

            classData.ID = $scope.modalData.ID;
            classData.className = $scope.modalData.className;
            classData.regTechName = $scope.modalData.regTechName;
            classData.classType = $scope.modalData.classType;

            classSettingService.updateClass(classData).then(function(res){
                update.updateClass = res;
            });

            if(update.add && update.del && update.updateClass){
                alert("编辑成功");
            }
            else if(update.del && update.updateClass){
                alert("编辑成功");
            }
            else if(update.add && update.del){
                alert("编辑成功");
            }
            else if(update.add && update.updateClass){
                alert("编辑成功");
            }
            else if(update.add){
                alert("编辑成功");
            }
            else if(update.del){
                alert("编辑成功");
            }
            else if(update.updateClass){
                alert("编辑成功");
            }
            else{
                alert("编辑失败");
            }
        };

        //批量删除群组
        $scope.deleteClass = function(){

            var delList = [];

            angular.forEach($scope.classData, function(classlist){
                if(classlist.status){
                    delList.push(classlist.ID);
                }
            });
            classSettingService.deleteClass(delList).then(function(res){
                if(res == true){
                    alert("删除成功");
                }
                else{
                    alert("删除失败");
                }
            });
        };

        //通过ID删除群组
        $scope.delteClassForID = function(classlist){
            classSettingService.deleteClassForID(classlist.ID).then(function(res){
                if(res == true){
                    alert("删除成功");
                }
                else{
                    alert("删除失败");
                }
            });
        };

        //初始化添加群组
        //$scope.AddClass = function(){
        //    $scope.ClassModalData.modalName = "添加新群组";
        //    $scope.inputStyle = "userCheckOFF";
        //};
    }
]);
