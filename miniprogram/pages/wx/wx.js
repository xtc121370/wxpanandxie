// pages/wx/wx.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
openid:'250',
name:'pansb',
nickName:null,
city:'taiguo',
test:'PANsb',


  },
  onGotUserInfo: function (e){

var that=this;
  wx.getUserInfo({
    success:function(res){
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
      that.data.gender = res.userInfo.gender,
        that.data.nickName = res.userInfo.nickName,
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl,
        app.globalData.nickName = e.detail.userInfo.nickName,
        console.log('头像url:' + app.globalData.avatarUrl)
      console.log('昵称：' + app.globalData.nickName)
      console.log('昵称' + that.data.nickName)
      console.log('性别:' + that.data.gender)

      wx.cloud.callFunction({

        name:'login',
        complete: res => {
          console.log('callFunction test result: ', res)
          that.data.openid = res.result.userInfo.openId,
            app.globalData.openid = res.result.userInfo.openId,
           
          console.log('openid:' + app.globalData.openid)
          console.log('标识符' + that.data.openid)
        }

      })
      wx.request({
        url: 'http://202.206.221.94:8080/signUp',
        data: {
          openId: that.data.openid ,
          nickName:that.data.nickName,
          gender:that.data.gender

        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

        },
      
        success:function(res){

          console.log('服务器返回：'+res)
        }

      })
  wx.switchTab({
    url: '../club/club',
  })
    }

  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    wx.getSetting({
      withCredentials: true,
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {

              app.globalData.avatarUrl = res.userInfo.avatarUrl,
                app.globalData.nickName = res.userInfo.nickName,
                that.data.nickName = res.userInfo.nickName,
                that.data.gender = res.userInfo.gender,
                console.log('昵称' + that.data.nickName)
              console.log('性别:' + that.data.gender)
                console.log('头像url:' + app.globalData.avatarUrl)
              console.log('昵称：' + app.globalData.nickName)
              wx.cloud.callFunction({

                name: 'login',
                complete: res => {
                  console.log('callFunction test result: ', res)
                  that.data.openid = res.result.userInfo.openId,
                    app.globalData.openid = res.result.userInfo.openId,
                    console.log('openid:' + that.data.openid)

     wx.request({
                    url: 'http://202.206.221.94:8080/signUp',
                    data: {
                    "openId":that.data.openid,
                    "nickName":that.data.nickName,
                      "gender":that.data.gender

                    },
                 
                    method: 'POST',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

                    },
                   
                    success: function (res) {
                   
                     console.log(res.data)
                  
                  wx.switchTab({
                    url: '../club/club',
                  })
                    
                    }

                  })
                }

              })
           
            }
            })
        }
     
  },
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