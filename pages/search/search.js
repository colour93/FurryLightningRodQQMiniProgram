//search.js
const app = getApp()

//一些玩意
const d_none = 'none !important'
const d_block = 'block !important'
const d_flex = 'flex !important'

let that

Page({
    data:{
        permission: false,
        searchBoxDisplay: d_none,
        permissionRequestDisplay: '',
        targetQQ: '',
        msg: '',
        result_danger_display: d_none,
        result_safe_display: d_none,
        result_warning_display: d_none,
        r_name: '',
        r_QQ: '',
        r_level: '',
        r_reason: '',
        r_addDate: '',
        shareBtnDisplay: ''
    },

    // 载入
    onLoad(query) {
        that = this
        permissionRequest()
        if(typeof(query.qq)==='undefined'){query.qq=0}
        // 控制分享按钮是否显示
        if(query.qq===0){this.setData({shareBtnDisplay: d_none})}
        search(query.qq)
    },

    // 授权按钮
    permissionRequestBtnClick: function(e){
        permissionRequest()
    },

    //输入框内容
    targetQQInput: function(e){
        this.setData({
            targetQQ: e.detail.value
        })
    },
    
    //查询按钮事件
    searchBtnClick: function(e){
        this.setData({
            result_safe_display: d_none,
            result_warning_display: d_none,
            result_danger_display: d_none
        })
        search(this.data.targetQQ)
    },

    // 分享按钮事件
    onShareAppMessage(e) {
        const that = this
        return {
            title: '避雷针查询结果 - ' + that.data.r_name,
            // shareTemplateId: 'EE558DDCEFB407FD811CC6C06181D6AF',
            // shareTemplateData: {
            //         txt1: that.data.r_name,
            //         txt2: "查看避雷结果"
            // },
            path: '/pages/search/search?qq='  + that.data.r_QQ,
            generalWebpageUrl: 'https://furrylightningrod.com/search/' + that.data.r_QQ
        }
    }
    
})

// 授权模态弹窗
function permissionRequest(){
    qq.showModal({
        title: '提示',
        content: '避雷针查询功能将获取您欲查询的QQ号码，请确认您是否同意，如不同意，将无法使用避雷针查询功能',
        success(res) {
            if(res.confirm){
                that.setData({
                    permission: true,
                    searchBoxDisplay: d_block,
                    permissionRequestDisplay: d_none
                })
            }else if(res.cancel){
                that.setData({
                    permission: false,
                    shareBtnDisplay: d_none,
                    permissionRequestDisplay: d_block
                })
            }
        }
    })
}

// 查询函数
function search(QQ){
    if(QQ === 0){
        that.setData({
            msg: '查询QQ不能为空！'
        })
    }else{
        console.log(QQ)
        const data = {
            'type': 'search',
            'targetQQ': QQ
        }
        // 利用云函数向API发送请求
        qq.cloud.callFunction({
            name: 'blacklist',
            data: data,
            success(res){
                console.log('success', res)
                if(res.result.s==='查无此人'){
                    that.setData({result_safe_display: d_block})
                }else{
                    if(res.result.level<=2){
                        that.setData({
                            result_warning_display: d_block,
                            r_name: res.result.name,
                            r_QQ: res.result.QQ,
                            r_level: res.result.level,
                            r_addDate: res.result.addDate,
                            r_reason: res.result.reason
                        })
                    }
                    if(res.result.level===3){
                        that.setData({
                            result_danger_display: d_block,
                            r_name: res.result.name,
                            r_QQ: res.result.QQ,
                            r_level: res.result.level,
                            r_addDate: res.result.addDate,
                            r_reason: res.result.reason
                        })
                    }
                }
                that.setData({shareBtnDisplay: d_block})
            },fail(res){
                console.log('err', res)
            }
        })
    }
}

