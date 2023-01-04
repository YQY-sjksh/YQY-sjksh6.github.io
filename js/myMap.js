(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".middle .up"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据

  var data = [
    {name:"安徽",value:0},
    {name:"澳门",value:0},
    {name:"北京",value:0},
    {name:"福建",value:1},
    {name:"甘肃",value:0},
    {name:"广东",value:1},
    {name:"广西",value:0},
    {name:"贵州",value:0},
    {name:"海南",value:0},
    {name:"河北",value:1},
    {name:"河南",value:2},
    {name:"黑龙江",value:0},
    {name:"湖北",value:1},
    {name:"湖南",value:2},
    {name:"吉林",value:0},
    {name:"江苏",value:1},
    {name:"江西",value:0},
    {name:"内蒙古",value:0},
    {name:"宁夏",value:0},
    {name:"青海",value:0},
    {name:"山东",value:4},
    {name:"山西",value:1},
    {name:"陕西",value:1},
    {name:"台湾",value:0},
    {name:"天津",value:1},
    {name:"西藏",value:0},
    {name:"香港",value:0},
    {name:"青海",value:0},
    {name:"新疆",value:0},
    {name:"云南",value:0},
    {name:"浙江",value:0},
    {name:"重庆",value:1},
    {name:"四川",value:2},
    {name:"辽宁",value:0},
    {name:"上海",value:0},
    ];




  // var planePath =
  //   "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  // //var planePath = 'arrow';
  // var convertData = function(data) {
  //   var res = [];
  //   for (var i = 0; i < data.length; i++) {
  //     var dataItem = data[i];

  //     var fromCoord = geoCoordMap[dataItem[0].name];
  //     var toCoord = geoCoordMap[dataItem[1].name];
  //     if (fromCoord && toCoord) {
  //       res.push({
  //         fromName: dataItem[0].name,
  //         toName: dataItem[1].name,
  //         coords: [fromCoord, toCoord],
  //         value: dataItem[1].value
  //       });
  //     }
  //   }
  //   return res;
  // };
  
  var option = {
        title: {
            text: '| 中国各省份传承人分布地图',
            top: '3%',
            left:'2%',
            textStyle:{
              fontSize: 14,
              fontWeight:"bolder",
              color:'#FFFFFF'
            }
          },
  tooltip : {
      trigger: 'item',
      position: ['10%', '70%']
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data:['iphone']
  },
  visualMap: {
    show: true,
    min: 0,
    max: 5,
    left: 'left',
    top: 'bottom',
    // text: ['多', '少'], // 文本，默认为数值文本
    calculable: true,
    inRange: {
        // color: [ '#FFFFCC','#CC99CC','#9999CC','#ac899f'], // 蓝绿
        color: [ '#FFFFCC','#dfcfd9','#cab1c4','#ac899f'], // 蓝绿
        // color: [ 'rgb(250,241,208)','rgb(255,169,100)'], // 蓝绿
    },
    textStyle:{color:'#FFFFFF'},
    bottom:'20%',
},


  series : [
    {
        name: '数量',
        type: 'map',
        mapType: 'china',
        // map: "china",
        roam: false,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
          normal: {
              borderWidth: 0.8, // 区域边框宽度
              borderColor: 'rgb(96,96,96)', // 区域边框颜色
              areaColor: '#2e8ebda', // 区域颜色
          },
          emphasis: {
              areaColor: '#c2cad7',
          },
      },
        data:data
    }
]










  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
