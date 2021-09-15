
Page({
  data:{
    NickName:"",
    nologin:true,
  },
login(e){
  let that=this
  wx.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success(res) {
      console.log("授权成功",res.userInfo)
      that.setData({
        NickName:res.userInfo.nickName,
        touxiang:res.userInfo.avatarUrl,
       nologin:false
      })
    },
    fail(res){
      console.log("授权失败",res.userInfo)
    }
  })
},
close(){
  this.setData({
    NickName:"",
    touxiang:"",
    nologin:true
  })
},
})