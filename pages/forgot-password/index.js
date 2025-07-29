// Index.js
Page({
  data: {
    email: ''
  },
  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },
  validateAndSendEmail() {
    const emailPattern  = /^[a-z][a-z0-9]*@[a-z]+\.[a-z]+$/;
    const email = this.data.email;
    if (!emailPattern.test(email)) {
      wx.showModal({
        title: 'Warning',
        content: 'Invalid email address',
        showCancel: false,
        confirmText: 'OK',
      });
    }
    else {
      wx.showToast({
        title: 'Email sent',
        icon: 'success'
      });
      console.log(`Email successfully sent to "${email}" at ${new Date().toISOString()}`);
      this.setData({
        email: ''
      });
    }
  },
  cancelAction() {
    wx.navigateBack();
  }
});