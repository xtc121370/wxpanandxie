// pages/club/club.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
club:null,
images:[
      {
    id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/5B5J5uwuVM8*D7dAuUX39SXV79ibqrNo42r7*Tx.klU!/r/dMAAAAAAAAAA'
      },
      {
        id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/HPicE8JMM2cBNNojqLznhGjv5Q2bDhuewx1qvrcc8ac!/r/dAUBAAAAAAAA'
      }
      ,
      {
        id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/JqDM2nFrWvrUU.fMMeRj7HYvHjUgk2PAcSQIb05LMZg!/r/dL4AAAAAAAAA'
      },
      {
        id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/oJ0KyZ8.h5Zpf2xiH1p*7X1vGogLwi.7J.t5aG3iibA!/r/dLYAAAAAAAAA'
      },
      {

        id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/uufsAmuU2VlMxfjFJFhHCQnJ2aixClr7A26B4IRac6g!/r/dE8BAAAAAAAA'
      },
      {

        id: 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/GHkJA1Lex13EAYMhxZu.QZC5.M64IJn9tAlFrBzDjh8!/r/dEkBAAAAAAAA'
      },
      {

        id:'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/TqdrJ7PySDiq8g*GehVmJa7dL0WJqJ3TzvPJMc0s.yo!/r/dL8AAAAAAAAA' 
      }


    ],
    x:null,
   arry:[],
   index:null,
    testUrl:null

  },
  showModal(e) {
    var that=this;
   var index= e.currentTarget.dataset.x;
    var x=[]
    x.push(that.data.club[index].id)
   

    that.setData({
      modalName: e.currentTarget.dataset.target,
  
      testUrl:x

    })
  
    console.log(that.data.index);
    console.log(that.data.testUrl)
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
  var that=this;
  that.setData({

    club:app.globalData.club
  })
 /* var x=that.data.images[i]*/
for(var i=0;i<=6;i++){
    var a =that.data.images[i]
    var b = that.data.club[i]
   var obj = Object.assign(a,b);
   that.data.arry.push(obj);
 
}

    that.setData({
club:that.data.arry

    })   
     console.log(that.data.club)
/*console.log('test；'+that.data.club.color)*/
    
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