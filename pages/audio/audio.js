Page({
  data: {
    src: 'https://public-1304934178.cos.ap-beijing.myqcloud.com/temp/audio.wav',

    audioCtx: null,

    duration: 0,
    currentTime: 0,

    playing: false
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '音频播放'
    })

    // 创建实例
    const audioCtx = wx.createInnerAudioContext({
      useWebAudioImplement: true
    })

    // 设置音频资源地址
    audioCtx.src = this.data.src

    /* 
      使用定时次循环多次获取音频时长，注意：音频时长可能返回 NaN
    */
    const interval = setInterval(() => {
      const duration = audioCtx.duration
      if (!Number.isNaN(duration) && duration !== 0) {
        clearInterval(interval)
      }

      // 设置音频时长
      this.setData({
        duration: duration
      })
    }, 100)

    // 播放事件
    audioCtx.onPlay(() => {
      this.setData({
        playing: true
      })
    })

    // 播放进度更新事件
    audioCtx.onTimeUpdate(() => {
      this.setData({
        currentTime: audioCtx.currentTime
      })
    })

    // 暂停事件
    audioCtx.onPause(() => {
      this.setData({
        playing: false
      })
    })

    // 停止事件
    audioCtx.onEnded(() => {
      this.setData({
        playing: false,
        currentTime: 0
      })
    })

    this.setData({
      audioCtx: audioCtx
    })
  },

  // 滑动
  slide(e) {
    const current = e.detail.value

    const audioCtx = this.data.audioCtx
    audioCtx.currentTime = current
  },

  // 播放
  play() {
    this.data.audioCtx.play()
  },

  // 暂停
  pause() {
    this.data.audioCtx.pause()
  },

  onUnload() {
    this.data.audioCtx.pause()
    this.data.audioCtx.destroy()
  }
})