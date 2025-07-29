// Index.js
Page({
  data: {
    email: '',
    password: '',
    rememberMe: false,
    isPassword: true
  },
  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },  
  onRememberChange(e) {
    this.setData({ rememberMe: e.detail.value.length > 0 });
  },
  togglePassword() {
    this.setData({
      isPassword: !this.data.isPassword
    });
  },
  validateForm(email, password) {
    const emailPattern = /^[a-z][a-z0-9]*@[a-z]+\.[a-z]+$/;
    if (!emailPattern.test(email)) {
      wx.showModal({
        title: 'Warning',
        content: 'Invalid email address',
        showCancel: false,
        confirmText: 'OK',
      });
      return false;
    }
    if (password.length < 6) {
      wx.showModal({
        title: 'Warning',
        content: 'Password should be minimum 6 characters',
        showCancel: false,
        confirmText: 'OK',
      });
      return false;
    }
    return true;
  },
  onLogin() {
    const {email, password} = this.data;
    const trimmedEmail = email.trim();
    if (!this.validateForm(trimmedEmail, password)) return;
    wx.showToast({
      title: 'Logged in succesfully...',
      icon: 'success'
    });
    console.log('Logged in with:', {
      email: trimmedEmail,
      password: password
    }, `Time: ${new Date().toISOString()}`);
    
    wx.redirectTo({
      url: '/pages/dashboard/dashboard'
    });
    this.setData({
      email: '',
      password: '',
      rememberMe: false
    });
  },
  onForgotPassword() {
    wx.navigateTo({ 
      url: '/pages/forgot-password/index'
    });
  },
  onCreateAccount() {
    wx.navigateTo({ 
      url: '/pages/create-account/index'
    });
  }
});