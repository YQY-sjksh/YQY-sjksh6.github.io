 // 多个柱状图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key11"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['石印','木印','半印半画','水印套画','人工绘制'];


option = {
    title: {
        text: '年画的制作方法',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#B8B2CA'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 50,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ '5', '4', '3', '2', '1'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },



               
            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            {
                value: 1
            },
            {
                value: 8
            },
            {
                value: 9
            },
            {
                value: 15
            },
            {
                value: 27
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '次';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key12"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['世俗生活','故事传说','娃娃美人','神仙与吉祥物',];


option = {
    title: {
        text: '年画题材',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },
    color: ['#F6E3A6'],
    grid: {
        left: '1%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 50,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ '4', '3', '2', '1', ],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                }

            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 10
            },
            {
                value: 22
            },
            {
                value: 35
            },
            {
                value: 39
            },
           
        ],
        label: {
            normal: {
                
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key21"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['卫画','画帖','画片','画张','纸画'];


option = {
    title: {
        text: '年画称呼',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#F0DECC'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 50,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ '5', '4', '3', '2', '1'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },



                
            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 1
            },
            {
                value: 1
            },
            {
                value: 1
            },
            {
                value: 5
            },
            {
                value: 14
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '次';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key22"));

//本人的影视小站(gaze.run)案例


var name_arrs = ['四川绵竹','天津杨柳青','山东潍坊杨家埠','江苏桃花坞',];


option = {
    title: {
        text: '四大年画之乡',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#C6D3E0'],
    grid: {
        left: '1%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 50,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ '4', '3', '2', '1', ],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },



               
            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 5
            },
            {
                value: 8
            },
            {
                value: 12
            },
            {
                value: 20
            },
            
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '次';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


 // 象形柱状图
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right .down"));

    option = {
        title: {
            text: '| 不同批次列入国家级非物质文化遗产中的木版年画',
            left:'1%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                // color:'#FFFFFF',
                fontSize:14,
            },
            top:"3.5%"
        },
        tooltip:{show: true},
        legend:{show: true,
            top:'3%',right:'3%',icon:'roundRect'},
        // backgroundColor: '#031245',
       grid: {
           left: '1%',
           top: '42%',
           bottom: '16%',
           right: '1%'
       },
       xAxis: {
           data: ['第一批次（2006）', '第二批次（2008）', '第三批次（2011）', ],
          axisTick: {
               show: false
           },
           axisLine: {
               lineStyle: {
                   color: 'rgba(255, 129, 109,.1)',
                   width: 1 //这里是为了突出显示加上的
               }
           },
           axisLabel: {
               textStyle: {
                   color: '#999',
                   fontSize: 12
               }
           }
       },
       yAxis: [{
               axisTick: {
                   show: false
               },
               axisLine: {
                show: false
                //    lineStyle: {
                //        color: 'rgba(255, 129, 109, 0.1)',
                //        width: 1 //这里是为了突出显示加上的
                //    }
               },
               axisLabel: {
                show: false
                //    textStyle: {
                //        color: '#999'
                //    }
               },
               splitArea: {
                   areaStyle: {
                       color: 'rgba(255,255,255,.5)'
                   }
               },
               splitLine: {
                   show: true,
                   lineStyle: {
                       color: 'rgba(255, 129, 109, 0.1)',
                       width: 0.5,
                       type: 'dashed'
                   }
               }
           }
       ],
       series: [
    {
           name:'木版年画',
           type: 'pictorialBar',
        //    barCategoryGap: '70%',
           barGap: '90%',
           barWidth:"35%",
           
           symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
           label: {
               show: true,
               position: 'top',
               distance: 15,
               color: 'rgb(250,194,109)',
               fontWeight: 'normal',
               fontSize: 12,
           },
           itemStyle: {
               normal: {
                   color: {
                       type: 'linear',
                       x: 0,
                       y: 0,
                       x2: 0,
                       y2: 1,
                       colorStops: [{
                               offset: 1,
                               color:'rgb(250,194,109)'
                           },
                           {
                               offset: 0,
                               color:'rgba(250,194,109,0.2)'
                           }
                       ],
                       global: false //  缺省为  false
                   }
               },
               emphasis: {
                   opacity: 1
               }
           },
           data: [11,5,1]
       },
       {
        
        barWidth:"35%",
        name:'其他      ',
        type: 'pictorialBar',
        barGap: '-35%',
        // barCategoryGap: '70%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 15,
            color: 'rgb(140,180,229)',
            fontWeight: 'normal',
            fontSize: 12,
        },
  
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color:'rgb(207,246,251)'
                        },
                        {
                            offset: 1,
                            color:'rgb(140,180,229)'
                        }
                    ],
                    global: false //  缺省为  false
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [1,0,0,]
    }
    ]
   };


  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

 // 饼图
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left .down"));

    option = {
        tooltip: {
          trigger: 'item'
        },
        title: {
            text: '| 年画的流行类别占比',
            left:'3%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                color:'#FFFFFF',
                fontSize:13,
            },
            top:"2.5%"
        },
        legend: {
          bottom: '5%',
          left: 'center',
          textStyle:{color:'rgb(255,255,255)'},
          
        },
        series: [
          {
            name: '占比',
            type: 'pie',
            radius: ['40%', '63%'],
            center: ['50%', '43%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
            //   show: false,
              position: 'inside',
              color:'rgb(11,11,11)',
              formatter: '{d}%',
            //   padding: 1,
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 60, name: '木版年画',itemStyle:{color:'rgb(183,179,204)'} },
              { value: 24, name: '水彩年画',itemStyle:{color:'rgb(243,221,200)'} },
              { value: 10, name: '扑灰年画',itemStyle:{color:'rgb(248,228,159)'} },
              { value: 6, name: '胶印年画',itemStyle:{color:'rgb(195,211,224)'}},
            ]
          }
        ]
      };

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


