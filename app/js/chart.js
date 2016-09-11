/**
 * Created by Axiny on 2016/8/30.
 */

/**
 * 堆叠区域折线图
 */
var areaLineChart = {
    "title": {
        "text": ""
    },
    "tooltip":{
        "trigger": "axis"  //鼠标经过显示所有数据线当前x轴数据
    },
    "legend":{  //图例
        "x":"center",
        "y":"310px",
        "data":["沉默用户比例"]
    },
    "xAxis": [  //x轴
        {
            data: ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    "yAxis":{  //y轴
        "type":"value"
    },
    "series":[  //数据项
        {
            "name": "沉默用户比例",
            "type": "line",
            "areaStyle":{"normal":{}},
            "data": [510, 600, 350, 520, 650, 400,550]
        }
    ],
    "grid": {  //图表绘制配置
        "x": 70,
        "y": 10,
        "x2": 40,
        "y2": 80,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderWidth": 1,
        "borderColor": "#ccc"
    }
};

/**
 * 折线图
 */
var lineChart = {
    "title": {
        "text": ""
    },
    "tooltip":{
        "trigger": "axis"  //鼠标经过显示所有数据线当前x轴数据
    },
    "legend":{  //图例
        "x":"center",
        "y":"310px",
        "data":["data1","data2"]
    },
    "xAxis": [  //x轴
        {
            "data": ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    "yAxis":{  //y轴
        "type":"value"
    },
    "series":[  //数据项
        {
            "name": "data1",
            "type": "line",
            "data": [710, 600, 350, 520, 700, 400]
        },
        {
            "name": "data2",
            "type": "line",
            "data": [180, 280, 100, 250, 550, 301]
        }
    ],
    "grid": {  //图表绘制配置
        "x": 70,
        "y": 10,
        "x2": 40,
        "y2": 80,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderWidth": 1,
        "borderColor": "#ccc"
    }
};

/**
 * 堆叠树状图
 */
var stackedBarChart = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        "x":"center",
        "y":"310px",
        "data":["忠诚用户","连续活跃4周用户","连续活跃3周用户","连续活跃2周用户","本周回流用户","新用户"]
    },
    "grid": {  //图表绘制配置
        "x": 70,
        "y": 10,
        "x2": 40,
        "y2": 80,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderWidth": 1,
        "borderColor": "#ccc"
    },
    xAxis:  {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '忠诚用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[320, 302, 301, 334, 390, 330, 320],
            itemStyle:
            {
                normal:{color:'#d44141'}
            }
        },
        {
            name: '连续活跃4周用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle:
            {
                normal:{color:'#e35a3f'}
            }
        },
        {
            name: '连续活跃3周用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle:
            {
                normal:{color:'#f17a40'}
            }
        },
        {
            name: '连续活跃2周用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle:
            {
                normal:{color:'#f6994e'}
            }
        },
        {
            name: '本周回流用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
            itemStyle:
            {
                normal:{color:'#f9b865'}
            }
        },
        {
            name: '新用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
            itemStyle:
            {
                normal:{color:'#fdd772'}
            }
        }

    ]
};

/**
 * 组合图 树状+折线
 */
var BarLineChart = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        "x":"center",
        "y":"310px",
        "data":["老用户","新用户","新用户占比"]
    },
    "grid": {  //图表绘制配置
        "x": 70,
        "y": 10,
        "x2": 40,
        "y2": 80,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderWidth": 1,
        "borderColor": "#ccc"
    },
    xAxis:  {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '老用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '新用户',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '新用户占比',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle:
            {
                normal:{color:'#f17a40'}
            }
        }
    ]
};