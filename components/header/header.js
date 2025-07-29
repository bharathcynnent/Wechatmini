Component({
  data: {
    menuVisible: false
  },
  methods: {
    toggleMenu() {
      this.setData({
        menuVisible: !this.data.menuVisible
      });
    },
    goHome() {
      wx.navigateTo({
        url: '/pages/home/home'
      })
    },
    goDashboard() {
      wx.navigateTo({
        url: '/pages/dashboard/dashboard'
      })
    },
    goProducts() {
      wx.navigateTo({
        url: '/pages/products/products'
      })
    },
    goUsers() {
      wx.navigateTo({
        url: '/pages/users/users'
      })
    }
  }
});
