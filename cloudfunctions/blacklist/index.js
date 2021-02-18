// 云函数入口文件
const cloud = require('qq-server-sdk')
const http = require('http')
const querystring = require('querystring')
const request = require('request')
const url = 'https://api.furrylightningrod.com:29999/api'
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {

  const {
    OPENID,
    APPID,
    ENV
  } = cloud.getQQContext()

  // 判断请求类型
  if(event.type==='search'){
    return new Promise((resolve, reject) => {
      request({
        url: url + '/list',
        method: "POST",
        json: true,
        headers: {
          "content-type": "application/json"
        },
        body: {
          QQ: event.targetQQ
        }
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          try {
            resolve(body)
          } catch (e) {
            reject()
          }
        }
      })
    })
  }else{
    return {
      status: 500,
      msg: '未知请求类型'
    }
  }
}
