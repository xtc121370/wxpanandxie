//app.js
App({
  onLaunch: function () {
var that=this;
    wx.request({
      url: 'http://202.206.221.94:8080/league',
      data: {


      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

      },
      success: function (res) {

        console.log(res.data)
       that.globalData.club=res.data;
       console.log(that.globalData.club)
      }
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },

  globalData:{
    openid: null,
    phone: '88888888888',
    avatarUrl:null,
    nickName:null,
    club:null,
    color: [
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
  }
})
