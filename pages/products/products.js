Page({
  data: {
    products: []
  },
  onShow() {
    const products = wx.getStorageSync('addedProducts') || [];
    this.setData({ products });
  }
});
