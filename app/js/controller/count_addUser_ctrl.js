/**
 * Created by Axiny on 2016/8/30.
 */
var app = angular.module('routerApp');
app.controller('countAddUserCtrl',[
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

        var chart = {
            "role":"",  //教师  非教师
            "dateLimits":"",    //时间长度 60 30 7 1
            "date":""  //时间截点  日期 例2015-1-1
        };
    }
]);