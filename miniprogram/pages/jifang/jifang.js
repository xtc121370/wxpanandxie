// pages/jifang/jifang.js
var app = getApp();
var wxCharts = require('../../wxcharts.js');
var daylineChart = null;
var yuelineChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jifang:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var x = Math.floor((Math.random() * 180) + 1)
    console.log(x)
    var arry = []

    that.setData({
      jifang: x
    })
    console.log(that.data.jifang)




    var windowWidth = 400;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    }
    catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    yuelineChart = new wxCharts({ //当月用电折线图配置
      canvasId: 'yueEle',
      type: 'column',
      categories: ['8时','9时','10时','11时','12时','13时','14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时'], //categories X轴
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '机房使用情况',
        //data: yuesimulationData.data,
        data: [12,31,55,71,80,10,55, 60, 81, 140, 154, 122, 177, 133, 100],
        format: function (val, name) {
          return val.toFixed(2) + 'kWh';
        }
      },

      ],
      xAxis: {
        disableGrid: true,

      },
      yAxis: {
        title: '机房人数',
        format: function (val) {
          return val.toFixed(2);
        },

        max: 180,
        min: 0
      },
      width: windowWidth,
      height: 250,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });

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