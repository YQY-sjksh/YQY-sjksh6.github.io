// 旭日图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .left .up"));

    var data = [
        {
          name: '杨柳青',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '16',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《万象更新》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '15',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《莲年有余》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '15',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《五子夺莲》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
        
        
          {
          name: '桃花坞',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '14',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《花开富贵》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '14',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《春牛图》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '17',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《丰收图》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '杨家埠',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '32',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《水浒传》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '20',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《西游记》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '33',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《五福捧寿》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '绵竹',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '17',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《迎春图》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '14',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《麻姑献寿》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '13',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《五福捧寿》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '朱仙镇',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '32',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《松鹤延年》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '28',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《五子夺魁》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '32',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《步步莲生》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '潍坊',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '12',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《三羊开泰》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '15',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《风筝都之春》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '19',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《农家乐》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '佛山',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '10',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《梅花童子》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '14',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《三面红旗》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '14',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《妇女半边天》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '漳州',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '5',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《狮头衔剑》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '7',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《金虎送福》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '6',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '《桃福迎春》',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        }
      ];

    option = {
        title: {
          text: '/ 具有代表性的传统年画及其代表作/',
          textStyle: {
            fontSize: 14,
            align: 'center',
            color:'#FFFFFF'
            
          },
          bottom:'10px',
          right:'17%'
        },
        series: {
          type: 'sunburst',
          data: data,
          center:['50%','45%'],
          radius: [0, '95%'],
          sort: undefined,
          emphasis: {
            focus: 'ancestor'
          },
          levels: [
            {},
            {
              r0: '20%',
              r: '45%',
              label: {
                rotate: 'tangential'
              },
              itemStyle: {
                borderWidth: 1
              }
            },
            {
              r0: '45%',
              r: '56%',
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: 'rgb(65,57,52)'
              }
            },
            {
              r0: '58%',
              r: '61%',
              label: {
                position: 'outside',
                // padding: 3,
                // silent: false,
                fontSize: 10.5,
                fontFamily:'sans-serif',
                // color: 'rgb(0,0,0)'
                color: 'rgb(190,225,201)'
              },
              itemStyle: {
                borderWidth: 2
              }
            }
          ]
        }
      };;
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();



(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .middle .down"));

    var 
           option = {
  title: {
    text: '年画的主要大类',
    subtext: 'Types of New Year pictures',
       left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      '门神类',
      '吉庆类',
      '风情类',
      '杂画类',
      '戏出类'   
  ] 
  },
  series: [
  {
      name: '数据占比',
      type: 'pie',
      radius: [20, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      left: 'center',
      selectedMode: "multiple",
      itemStyle: {
        borderRadius: 7
      },
        
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: '门神类' },
        { value: 38, name: '吉庆类' },
        { value: 32, name: '风情类' },
        { value: 30, name: '杂画类' },
        { value: 28, name: '戏出类' }
      ]
    }, 
  ]
};
          
  
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


// 堆叠折线图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .right .up"));

    option = {
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        //  color: ['rgb(192,150,154)', 'rgb(230,188,190)', 'rgb(183,192,165)', 'rgb(226,220,170)', 'rgb(186,174,188)'],
        //  color: ['rgb(203,52,59)', 'rgb(124,148,182)', 'rgb(11,35,63)', 'rgb(151,119,134)', 'rgb(207,184,91)'],
        //  color: ['rgb(40,52,67)', 'rgb(254,168,99)', 'rgb(4,163,170)', 'rgb(247,210,86)', 'rgb(22,64,138)'],
         color: ['rgb(254,168,99)', 'rgb(249,240,207)', 'rgb(190,224,201)', 'rgb(6,156,163)', 'rgb(185,173,187)'],
        title: {
          text: '| 国家非物质文化遗产代表性项目木版年画数量统计（按地区）',
          top:'10px',
          left:'10px',
          textStyle: {
            fontSize: 14,
            align: 'center',
            color:'rgb(255,255,255)'
            
          },
        },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['山东省', '河南省', '四川省', '陕西省', '湖北省', '山西省', '天津市','河北省', '江苏省', '福建省', '湖南省', '广东省', '重庆市'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '数量',
              type: 'bar',
              barWidth: '60%',
              data: [3,2,2,1,1,1,1,1,1,1,1,1,1]
            }
          ]
        };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


// 水球图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .right .down"));
    options = {
      series: [{
          type: 'liquidFill',
          waveAnimation: false,
          animation: false,
          data: [{
              value: 0.7
          }]
      }]
  };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


 