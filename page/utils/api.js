'use strict';
import Promise from './es6-promise.min'

module.exports = {
  ACTI_DETAIL: '/page/activity/detail/',

  // HOST_WORK: 'http://work.artand.cn/',
  // HOST_HEAD: 'http://head.artand.cn/',
  CHILD_ACT_DETAIL: 'https://jihangyu.cn/firefly/activity/children_detail',
  // HOT: 'discover/work/hot',
  // LATEST: 'discover/work/new',

  SWIPERS: 'https:jihangyu.cn/firefly/children/swipers',

  // SIGN_UP: 'http://ios1.artand.cn/signup/sms',
  // LOGIN: 'http://ios1.artand.cn/login/doLogin',
  // GET_VERIFICATION: 'http://ios1.artand.cn/signup/sms',

  get (url) {
    return new Promise((resolve, reject) => {
      console.log(url)
      wx.request({
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  json2Form(json) {
    var str = []
    for(var p in json){
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
    }
    return str.join("&")
  }

};
