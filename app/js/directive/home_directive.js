/**
 * Created by Axiny on 2016/8/3.
 */
'use strict'//严格模式

var routerApp = angular.module('routerApp');
routerApp.directive("chartView",[
    "homeService",
    function(homeService){
        return{
            restrict:'EA',  //以什么形式声明指令 E代表元素 A代表属性
            replace:false,  //是否替换声明指令的标签

            link:function ceartChart(scope, element, attrs){//操作DOM元素

                var chartView = echarts.init(element[0],"YXT-chartStyle");//YXT-chartStyle：chart样式文件名称
                chartView.showLoading();                                  //当数据加载
                var data;
                homeService.getChartData().then(function(res){
                    data = res;
                    chartView.setOption(data);
                    chartView.hideLoading();
                });
            }
        };
    }
]);
