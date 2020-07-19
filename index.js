// Bar chart
// 基于准备好的dom，初始化 echarts-1 实例
var echart1 = echarts.init(document.getElementById('echarts-1'));
// echarts-1 data and options
var option1 = {
    title: {
        text: '人员地域分布'
    },
    tooltip: {},
    legend: {
        data: ['人数']
    },
    xAxis: {
        data: ["深圳", "上海", "重庆", "北京", "长沙", "衡阳"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [15, 22, 33, 12, 14, 13],
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = ['#759aa0', '#eedd78', '#73a373', '#73b9bc', '#91ca8c', '#f49f42'];
                    return colorList[params.dataIndex]
                }
            }
        },
    }]
};
// show echarts-1
echart1.setOption(option1);

// Coxcomb
var echart2 = echarts.init(document.getElementById('echarts-2'));
var option2 = {
    title: {
        text: '人员地域分布'
    },
    series: [
        {
            name: '人员地域分布',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                { value: 15, name: '深圳' },
                { value: 22, name: '上海' },
                { value: 33, name: '重庆' },
                { value: 22, name: '北京' },
                { value: 14, name: '长沙' },
                { value: 23, name: '衡阳' }
            ]
        }
    ]
}
echart2.setOption(option2)

// Line chart
var echart3 = echarts.init(document.getElementById('echarts-3'));
var option3 = {
    title: {
        text: '地域活越分布人数'
    },
    tooltip: {},
    legend: {
        data: ['人数']
    },
    xAxis: {
        data: ["深圳", "上海", "重庆", "北京", "长沙", "衡阳"]
    },
    yAxis: {},
    visualMap: {
        pieces: [{
            gt: 0,
            lte: 15,
            color: '#ff0000',
        }, {
            gt: 15,
            color: '#096',
        }],
        outOfRange: {
            color: '#096'
        }
    },
    series: [{
        name: '人数',
        type: 'line',
        data: [10, 15, 30, 10, 12, 9],
    }]
}
echart3.setOption(option3)

// Remix: bar chart × line chart 
var echart4 = echarts.init(document.getElementById('echarts-4'));
var option4 = {
    title: {
        text: '人员地域分布'
    },
    tooltip: {},
    legend: {
        data: ['人数']
    },
    xAxis: {
        data: ["深圳", "上海", "重庆", "北京", "长沙", "衡阳"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [15, 22, 33, 12, 14, 13],
        color:"#096"
    },{
        name: '人数',
        type: 'line',
        data: [10, 15, 30, 10, 12, 9],
    }]
};
echart4.setOption(option4)