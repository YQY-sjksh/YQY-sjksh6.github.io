 // 地图
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right .up"));

    var getName =['20年代', '30年代', '40年代','50年代', '60年代', '70年代'];
    var getValue =[2,
        6,
        3,
        6,
        2,
        1,
        ];
    var max = Math.max.apply(null, getValue);
    var getMax=[];
    for(i=0;i<getName.length;i++){
        getMax.push(max)
    }
    console.log(getMax) ;
    
    option = {
        // backgroundColor:"#003366",
        grid: {
            left: '8%',
            right: '5%',
            bottom: '1%',
            top: '8%',
            containLabel: true
        },
        title: {
            text: '| 传承人出生年代',
            left:'4%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                color:'#FFFFFF',
                fontSize:14,
            },
            top:"3.5%"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name  + ' : ' + params[0].value
            }
        },
        xAxis: {
            show: false,
            
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            offset: 100,
            
            axisLabel: {
                show: true,
                margin:-10,
                align: 'left',
                textStyle: {
                    color: '#66cc00',
                 
                },
                formatter: function(value,index) {
                         var num = ''
                         var str = ''
                         no = 'NO.';
                         num= (index + 1);
                         if (index === 0) {
                             str = '{no1|' + no + '} {num1|' + num + '} {title1|' + value + '}'
                         } else if (index === 1) {
                             str = '{no2|' + no + '} {num2|' + num + '} {title2|' + value + '}'
                         }else if (index === 2) {
                             str = '{no3|' + no + '} {num3|' + num + '} {title3|' + value + '}'
                         }else {
                             str = '{no|' + no + '} {num|' + num + '} {title|' + value + '}'
                         }
                         return str;
                         
                     },
                rich:{
                    no:{
                        color: 'rgb(254,218,144)',
                        fontSize:12,
                      
                    },
                    no1:{
                        color: '#9cc2e7',
                        fontSize:12,
                      
                    },
                    no2:{
                        color: 'rgb(127,195,196)',
                        fontSize:12,
                      
                    },
                    no3:{
                        color: '#a99abe',
                        fontSize:12,
                      
                    },
                    num:{
                        color: '#fff',
                        backgroundColor: 'rgb(254,218,144)',
                        width: 17,
                        height: 17,
                        fontSize:11,
                        align: 'center',
                        borderRadius: 100
                    },
                    num1:{
                        color: '#fff',
                        backgroundColor: '#9cc2e7',
                        width: 17,
                        height: 17,
                        fontSize:11,
                        align: 'center',
                        borderRadius: 100
                    },
                    num2:{
                        color: '#fff',
                        backgroundColor: 'rgb(127,195,196)',
                        width: 17,
                        height: 17,
                        fontSize:11,
                        align: 'center',
                        borderRadius: 100
                    },
                    num3:{
                        color: '#fff',
                        backgroundColor: '#a99abe',
                        width: 17,
                        height: 17,
                        fontSize:11,
                        align: 'center',
                        borderRadius: 100
                    },
                    title:{
                        
                        color: 'rgb(254,218,144)',
                    },
                    title1:{
                        
                        color: '#9cc2e7',
                    },
                    title2:{
                        
                        color: 'rgb(127,195,196)',
                    },
                    title3:{
                        
                        color: '#a99abe',
                    },
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: getName
        }, {
            type: 'category',
            inverse: true,
            offset: -10,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                    fontWeight:'lighter',
                    fontFamily:"Arial"
                },
                
            },
            
        }],
        series: [{
                name: '值',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgb(240,222,204)'
                        }, {
                            offset: 0.7,
                            color: 'rgb(240,222,204)'
                        },{
                            offset: 1,
                            color: 'rgb(195,211,224)'
                        },
                    ]),
                    },
                },
                barWidth: 15,
                
                data: getValue,
                // label: {
                //     normal: {
                //         formatter: function(data) {
                //             return data.value ;
                //         },
                //         show: true,
                //         position: 'right',
                //         // distance: 5,
                //         color: 'white',
                //         fontSize: '12'
                //         // backgroundColor: '#1D3039',
                //         // padding: 0,
                //         // borderRadius: 20
                //     }
                // },
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 15,
                barGap: '-100%',
                
                data: getMax,
                label:{show:false},
                itemStyle: {
                    normal: {
                        color: 'rgba(24,31,68,1)',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left .down"));
    option = {
      title: {
        text: '年画项目的非遗代表性传承人',
        subtext:'国家级',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        top:'10%',
        left: 'right'
      },
      color:['#61a0a8','#d48265'],
      series: [
        {
          name: '数量',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 24, name: '男性' },
            { value: 1, name: '女性' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();