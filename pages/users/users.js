import {request} from '../../utils/request';
Page({
  async onLoad() {
    try{
      const result = await request ('https://dummyjson.com/users');
      console.log('Result:', result);
      if (result && Array.isArray(result.users)) {
        await new Promise((resolve) => {
          this.setData({
            users: result.users
          }, resolve);
        });
      }
    } catch(error) {
      console.error('Failed to load users:', error);
    } finally {
      wx.hideLoading();
    }
  }
});