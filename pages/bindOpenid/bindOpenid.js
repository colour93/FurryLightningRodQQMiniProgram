//bindOpenid.js
//获取应用实例
const app = getApp()

//一些玩意
const d_none = 'none !important'
const d_block = 'block !important'
const d_flex = 'flex !important'

let that

Page({
    data: {
        // result_display: d_none,
        username: '',
        usernick: '',
        password: '',
        msg: ''
    },

    // 页面载入
    onLoad() {
        that = this
    },

    // 输入框内容变更
    usernameInput: function(e) {
        this.setData({
            username: e.detail.value
        })
    },
    passwordInput: function(e) {
        this.setData({
            password: e.detail.value
        })
    },

    // 绑定按钮
    bindOpenidBtnClick: function() {
        bindOpenid(this.data.username,this.data.password)
        
    }
})

// 绑定QQOPENID
function bindOpenid(username,password){
if(!username||!password){
    that.setData({
        msg: '用户名或密码不能为空'
    })
    qq.showModal({
        title: '绑定失败',
        content: that.data.msg,
        showCancel: false
    })
}else{
    console.log(username,password)
    const data = {
        'username': username,
        'password': password
    }
    // 利用云函数向API发送请求
    qq.cloud.callFunction({
        name: 'bindOpenid',
        data: data,
        success(data){
            const res = data.result
            console.log(res)
            if(res.body.message){
                that.setData({
                    msg:res.body.message
                })
                qq.showModal({
                    title: '绑定失败',
                    content: that.data.msg,
                    showCancel: false
                })
            }
            else {
                const user = res.body
                that.setData({
                    // result_display: d_block,
                    usernick: user.nick
                })
                qq.showModal({
                    title: '绑定成功',
                    content: '昵称：' + user.nick + '\n用户名：' + user.username,
                    showCancel: false
                })
            }
        },fail(data){
            console.log('err', data)
        }
    })
}
}