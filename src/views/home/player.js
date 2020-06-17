class Player {
  constructor(videoRef) {
    this.media = document.querySelector(videoRef)
  }

  // 播放
  play() {
    const playPromise = this.media.play()
    if (playPromise !== undefined) {
      playPromise
        .catch((err) => {
          console.log(err)
        })
        .then((res) => {
          console.log(res)
        })
    }
  }

  //暂停
  pause() {
    const pausePromise = this.media.pause()
    if (pausePromise !== undefined) {
      pausePromise
        .catch((err) => {
          console.log(err)
        })
        .then((res) => {
          console.log(res)
        })
    }
  }

  // 全屏
  fullScreen() {
    if (this.media.requestFullscreen) {
      if (!document.fullscreenElement) {
        this.media.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    } else {
      console.warn('不支持')
    }
  }

  // 视频进度
  progress() {
    const { currentTime, duration } = this.media
    const percent = `${(currentTime / duration) * 100}%`
    console.log(percent)
  }

  get currentTime() {
    console.log(this.media.currentTime)
    return this.media.currentTime
  }
}

export default Player
