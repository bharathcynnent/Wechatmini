import {request} from '../../utils/request';
Page({
  async onLoad() {
    try {
      const result = await request('https://dummyjson.com/products');
      console.log('Result:', result);
      if(result && Array.isArray(result.products)) {
        await new Promise((resolve) => {
          this.setData({
            products: result.products
          }, resolve);
        });
      }
    } catch(error) {
      console.error('Failed to load Products:', error);
    } finally {
      wx.hideLoading();
    }
  }
});
