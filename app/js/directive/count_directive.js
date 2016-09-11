/**
 * Created by Axiny on 2016/8/29.
 */
var app = angular.module('routerApp');
app.directive("countAddUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',  //以什么形式声明指令 E代表元素 A代表属性
            replace:false,  //是否替换声明指令的标签

            link:function ceartChart(scope, element, attrs){//操作DOM元素
                var chartView = echarts.init(element[0],"YXT-chartStyle");//YXT-chartStyle：chart样式文件名称
                chartView.showLoading();                                  //当数据加载
                chartView.setOption(lineChart);
                chartView.hideLoading();
            }
        };
    }
]);

app.directive("countTotalUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(lineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countSilentUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(areaLineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countStartUp",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(lineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countTotalUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(areaLineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countWeekUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(stackedBarChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countWeekUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(lineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countActiveUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(BarLineChart);
                chartView.hideLoading();
            }
        }
    }
]);

app.directive("countNowAddUser",[
    "countService",
    function(countService){
        return{
            restrict:'EA',
            replace:false,

            link:function ceartChart(scope, element, attrs){
                var chartView = echarts.init(element[0],"YXT-chartStyle");
                chartView.showLoading();
                chartView.setOption(lineChart);
                chartView.hideLoading();
            }
        }
    }
]);