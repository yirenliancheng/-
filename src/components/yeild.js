import React from 'react';
import { BorderBox10 } from '@jiaminghi/data-view-react';
import echarts from 'echarts';
import moment from 'moment';
import './index.css';

export default class Yeild extends React.PureComponent {

    initChart(){
        let myChart = echarts.init(document.getElementById('myYieldLine'));

        //模拟数据生成
        let xAxisData = [];
        let yeildData = [];
        let yeildPlanData = [];
        for(let i = 14; i > 0; i--){
            var yeild = Math.floor(Math.random()*4000+8000);
            var yeildPlan = Math.floor(yeild/0.9);
            var day = moment().subtract(i,'days').format('MM-DD');
            xAxisData.push(day);
            yeildData.push(yeild);
            yeildPlanData.push(yeildPlan);
        }
        let ratio = [0.15];
        for(let i = 1; i < 14; i++ ){
            ratio.push(Number((1 - yeildData[i]/yeildData[i-1]).toFixed(2)));
        }

        console.log(xAxisData,yeildData,yeildPlanData,ratio);

        let option = {
            title: {
                text: '复合材料成品历史产量',
                textStyle:{
                    color: 'rgb(21,149,233)',
                    fontSize: 28
                }
            },
            legend: {
                right:'10%',
                data: ['计划产量', '实际产量', '日产量环比变化'],
                textStyle: {
                    color: 'white'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        interval: 'auto',
                        formatter: '{value}',
                        margin: '10'
                    },
                    data: xAxisData,
                    splitLine: { show: false },
                    axisLine: {
                        onZero: true,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '产量',
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        formatter:(value) => {
                            return `${Math.abs(value)}mm`
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    name: '环比变化率',
                    position: 'right',
                    min: (value) => -Math.ceil(Math.max(Math.abs(value.min),Math.abs(value.max))),
                    max: (value) => Math.ceil(Math.max(Math.abs(value.min),Math.abs(value.max))),
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        formatter:'{value}%'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '计划产量',
                    type: 'bar',
                    zlevel: 1,
                    barWidth: '50%',
                    barMaxWidth: '20',
                    itemStyle: {
                      normal: {
                        barBorderRadius: 30,
                        color: 'rgba(57, 92, 254, 0.2)',
                        borderWidth: 0,
                        shadowBlur: {
                          shadowColor: 'rgba(253, 191, 25, 0.1)',
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowOffsetY: 2,
                        },
                      }
                    },
                    data: yeildPlanData
                },
                { 
                    name: '实际产量',
                    type: 'bar',
                    zlevel: 2,
                    barWidth: '50%',
                    barGap: '-100%',
                    barMaxWidth: '20',
                    data: yeildData,
                    label: {
                        normal: {
                            position: 'top',
                            show: true,
                            color: 'rgb(22, 231, 56)'
                        }
                    },
                    itemStyle: {
                      normal: {
                        barBorderRadius: 30,
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                            offset: 0,
                            color: 'rgba(22, 231, 56, 0.2)' 
                          }, {
                            offset: 1,
                            color: 'rgba(22, 231, 56, 1)' 
                          }]
                        }
                      }
                    },
                },
                {
                    name: '日产量环比变化',
                    type: 'line',
                    zlevel: 3,
                    smooth: true,
                    yAxisIndex: 1,
                    symbolSize: 8,
                    lineStyle: {
                        width: 2
                    },
                    data: ratio
                }
            ]
        }

        myChart.setOption(option, true);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    componentDidMount() {
        this.initChart();
    }

    render(){
        return(
          <BorderBox10>
              <div id='myYieldLine' className='yieldLine'></div>
          </BorderBox10>
        )
    }
}