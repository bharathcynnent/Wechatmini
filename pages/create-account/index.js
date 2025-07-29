Page({
  data: {
    name: '',
    email: '',
    password: '',
    isPassword: true,
    termsAgreed: false
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  togglePassword() {
    this.setData({ isPassword: !this.data.isPassword });
  },

  onTermsAgreeChange(e) {
    this.setData({ termsAgreed: e.detail.value.length > 0 });
  },

  validateForm(name, email, password) {
    const emailPattern = /^[a-z][a-z0-9]*@[a-z]+\.[a-z]+$/;
    if (!name.trim()) {
      wx.showModal({ title: 'Warning', content: 'Name is required', showCancel: false, });
      return false;
    }
    if (!emailPattern.test(email)) {
      wx.showModal({ title: 'Warning', content: 'Invalid email address', showCancel: false,  confirmText: 'OK',});
      return false;
    }
    if (password.length < 6) {
      wx.showModal({ title: 'Warning', content: 'Password should be minimum 6 characters', showCancel: false });
      return false;
    }
    return true;
  },

  onRegister() {
    const { name, email, password } = this.data;
    const trimmedEmail = email.trim();
    if (!this.validateForm(name, trimmedEmail, password)) return;

    wx.showToast({ title: 'Account created', icon: 'success' });
    console.log('Account created for:', {
      name,
      email: trimmedEmail,
      password
    }, `Time: ${new Date().toISOString()}`);

    wx.redirectTo({ url: '/pages/dashboard/dashboard' });

    this.setData({
      name: '',
      email: '',
      password: '',
      termsAgreed: false
    });
  },

  goToLogin() {
    wx.navigateTo({ url: '/pages/login/login' });
  }
});
