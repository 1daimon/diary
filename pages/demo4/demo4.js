// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    have:false,
    src:"",
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  insertImage:function(e) {
    var __this = this;
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage_editor('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage_editor('camera')
          }
        }
      }
    })
  },
  in:function(e){
    console.log(e)
    this.setData({
      value:e.detail.value
    })
  },
  store:function(e){
    console.log(e)
    wx.setStorage({
      key:"addtion",
      data:JSON.stringify(this.data.value)
    })
    wx.reLaunch({
      url: '../index/index',
    })
  },
  // 选择图片本地路径
  chooseWxImage_editor: function (type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res.tempFilePaths[0]);
        that.upImgs_editor(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },
  /**编辑器图片上传至服务器**/
  upImgs_editor: function (imgurl, index) {
    var that = this;
    var _this = this;
    wx.uploadFile({
      url: 'https://jorian.image.cn/fileUpload',
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function (res) {
        var resj = JSON.parse(res.data);
        console.log(resj) //接口返回网络 
        var src = resj.data.url
        _this.setData({
          src:src
        })
      }
    })
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