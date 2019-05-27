// pages/club/club.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

color:[
      {
        id: 'gradual-orange'
      },
      {
        id: 'gradual-red'
      }
      ,
      {
        id: 'gradual-blue'
      },
      {
        id: 'gradual-green'
      },
      {

        id: 'gradual-purple'
      },
      {

        id: 'gradual-pink'
      }


    ],
   arry:[],
    

  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  wx.request({
    url: 'http://202.206.221.94:8080/league',
    data: {


    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

    },
 success:function(res){

   console.log(res.data)
 }
  })
    
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
  onHide: function () {/*
    var that = this;
    console.log('初始数据：' + that.data.color)
    let arr = [
      {
        id: 'gradual-orange'
      },
      {
        id: 'gradual-red'
      }
      ,
      {
        id: 'gradual-blue'
      },
      {
        id: 'gradual-green'
      },
      {

        id: 'gradual-purple'
      },
      {

        id: 'gradual-pink'
      }


    ],
      newArr = [];
    that.setData({

      color: newArr
    })


    for (let i = 0, len = arr.length; i < len;) {
      i++;
      let currentRandom = parseInt(Math.random() * len);
      if (!newArr.includes(arr[currentRandom])) {
        newArr.push(arr[currentRandom]);

      } else {
        i--;
      }
    }
    console.log('随机变换后' + that.data.color)


    console.log('当前页面：' + that.data.color)*/
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