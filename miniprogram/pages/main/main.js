const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [{ name: '网络管理协会',
     image: '../images/wgxh.jpg', 
     show: '网络管理协会成立于2006年10月，是隶属网信办的校级社团，负责维护全校网络的安全运行。这里聚集了一群热爱技术的小伙伴，网络管理、算法学习、产品开发、影音图像我们均有涉猎，还有丰富的社团活动和定期的技术沙龙。',
      phone:'协会服务电话:7525197'},
      { name: '校青协', 
      image: '../images/xqx.jpg', 
      show:'华北电力大学蓝之焰青年志愿者协会成立于1996年10月，是在共青团华北电力大学委员会领导下、由志愿从事社会公益事业与社会保障事业的青年自愿组成的全校性社会团体，是华北电力大学志愿者的权威代表组织机构。'},
    {name:'校学生会'},
    {name:'云阳合唱团'},
    {name:'校自务会'},
    {name:'校自律会'}
    
    
    
    ],
    load: true
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      height:null
    });
    
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
       
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})