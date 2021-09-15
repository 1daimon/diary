import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    backgroundColor:"#FFFFFF",
    yAxis:{
      show:true,
      position:'left',
      type:'value',
      splitLine:{
        interval:'auto',
        show:true
     },
     max:100,
     min:0,
     splitNumber:5,
     axisLabel:{
       color:"black"
     }
    },
    grid:{
      containLabel:true
    },
    xAxis:{
      data:[
        '8/6',
        '8/7',
        '8/8',
        '8/9',
        '8/10',
        '8/11',
        '8/12'
      ],
      axisTick:{
        show:false,
        interval:'0'
      },
      axisLabel:{
        interval:'0',
        color:"black"
      },
      type:"category",
      position:'bottom'
    },
  series :{
    type:'bar',
    legendHoverLink:true,
  }
  };
  chart.setOption(option);
  return chart;
}
function onitChart(canvas, width, height) {
  const chart= echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option= {
    backgroundColor:"#FFFFFF",
    title:{
      text:"情绪饼状图",
      top:"bottom",
      left:'center',
      textStyle:{
        fontSize: 14,
        fontWeight: '',
        color: '#333'
    }
    },
    legend:{
      left:"right",
      orient:"vertical",
      data:['积极情绪','一般情绪','消极情绪'],
      top:"center",
      itemWidth:10
    },
    label:{
      show:true,
      position:'center'
    },
    series:[
      {type:'pie',
        name:"情绪饼状图",
        radius:['35%','65%'],
        left:'0%',
        data:[
          {
            value:100,name:"积极情绪",
          },
          {
            value:0,name:"一般情绪",
            label:{
              show:false,
            }
          },
          {
            value:0,name:"消极情绪",
            label:{
              show:false,
            }
          }
        ],
       color:["#7ea174",'#e2af45',"#643441"]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    },
    ec2:{
      onInit:onitChart
    },
    active:0,
    
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})