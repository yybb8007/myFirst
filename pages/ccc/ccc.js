//aaa.js
var util = require('../../utils/util.js')
Page({
  data: {
    aaa: []
  },
  onLoad: function () {
    this.setData({
      aaa: (wx.getStorageSync('aaa') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
