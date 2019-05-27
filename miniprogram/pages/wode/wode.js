// pages/wode/wode.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:null,
uclass:null,
phone:null,
address:null,
description:null,
openId:null
  },
 name:function(e){
var that=this;
that.setData({
  name: e.detail.value

})
console.log(that.data.name)

 },
 phone: function (e) {
    var that = this;
    that.setData({
      phone: e.detail.value

    })
    console.log(that.data.phone)

  },
  uclass: function (e) {
    var that = this;
    that.setData({
      uclass: e.detail.value

    })
    console.log(that.data.uclass)

  },
  address: function (e) {
    var that = this;
    that.setData({
      address: e.detail.value

    })
    console.log(that.data.address)

  },
  description:function(e){

    var that=this;
    that.setData({

      discription:e.detail.value
    })
    console.log(that.data.description)
  },
upload:function(){

var that=this;
wx.request({
  url: 'http://202.206.221.94:8080/userInfo',
  data: {
   openId:that.data.openId,
   uAddress:that.data.address,
   phoneNum:that.data.phone,
   realName:that.data.name,
   uDescription:that.data.description,
   uClass:that.data.uclass

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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that=this;
that.setData({

  openId: app.globalData.openid
})
console.log(that.data.openId)
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