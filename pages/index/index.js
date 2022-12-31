Page({
  navigate(e) {
    const page = e.currentTarget.dataset.url

    wx.navigateTo({
      url: page
    })
  }
})