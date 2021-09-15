Page({
  data: {
    date: '',
    show: false,
    detail:'',
  },
  click:function(){
    wx.navigateTo({
      url: '../demo4/demo4',
    })
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  onShow:function(){
    var that=this;
  wx.getStorage({
    key:'addtion',
    success(e){
      console.log("chenggong")
      that.setData({
        detail:JSON.parse(e.data),
        time:new Date()
      })

    }
  })
  }
})
