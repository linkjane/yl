/**
 * Created by Axiny on 2016/9/1.
 */
var app = angular.module('routerApp');
app.controller('countRetainedUserCtrl',[
    "$scope",
    "$state",
    "countService",
    function($scope,$state,countService){
        $('#countDatePick').datetimepicker({
            minView:"month",
            language:'zh-CN',
            autoclose: true,
            todayBtn: true,
            pickerPosition: "top-left"
        });

        countService.getRetainedUser().then(function(res){
            var list = [];
            for(var i = 0; i < res.length; i++){
                var tableData = {
                    time:res[i].time,
                    addUser:res[i].addUser,
                    time1:res[i].week1,
                    time2:res[i].week2,
                    time3:res[i].week3,
                    time4:res[i].week4,
                    time5:res[i].week5,
                    time6:res[i].week6,
                    time7:res[i].week7,
                    time8:res[i].week8,
                    time9:res[i].week9
                };

                list.push(tableData);
            }

            $scope.tableData = list;
        });
    }
]);