const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'
const myRequest = options => {
  return new Promise ((resolve, reject) => {
    uni.request({
      url: baseURL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: res => {
        if (res.data.status == 0) {
          uni.showToast({
            title: '请求失败'
          })
        } else {
          resolve(res.data)
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
export default myRequest