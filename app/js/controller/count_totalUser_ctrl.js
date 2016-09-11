/**
 * Created by Axiny on 2016/8/31.
 */
var app = angular.module('routerApp');
app.controller('countTotalUserCtrl',[
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
    }
]);