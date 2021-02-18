//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    nickNameDisplay: '',
    userInfoDisplay: 'none !important',
    userLoginDisplay: 'flex',
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function auth() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        nickNameDisplay: app.globalData.nickNameDisplay,
        userInfoDisplay: 'flex',
        userLoginDisplay: 'none !important'
      })
      console.log(this.data.userInfo)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 获取用户信息
  bindGetUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    if (app.globalData.userInfo.nickName.length <= 4) {
      this.setData({nickNameDisplay: app.globalData.userInfo.nickName})
    } else {
      this.setData({nickNameDisplay: app.globalData.userInfo.nickName.substring(0,3) + '...'})
    }
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      userInfoDisplay: 'flex',
      userLoginDisplay: 'none !important'
    })
    this.onLoad()
  },
  addfriend(e){
    qq.authorize({
      scope: 'setting.addFriend',
      success() {
        //授权成功，可以加好友了
      }
    })
  },
  // 跳转到绑定页面
  goToBindOpenid: function(){
    qq.navigateTo({
      url: '/pages/bindOpenid/bindOpenid'
    })
  }
})
