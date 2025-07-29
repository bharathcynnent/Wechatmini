export const request = async (url, data = {}, method = 'GET') => {
  wx.showLoading({
    title: 'Loading...',
    mask: true
  });
  try{
    const result = await new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method,
        success: (res) => resolve(res.data),
        fail: reject
      });
    });
    return result;
  } catch(error) {
    wx.showToast({
      title: 'Request failed',
      icon: 'none'
    });
    throw error.errMsg;
  }
};