// pages/home/home.js
Page({
  goToLoginPage() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  goToBookingPage() {
    console.log("clikced")
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail'
    });
  }
});