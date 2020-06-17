<template>
  <div class="video-stage" ref="videoStage">
    <video
      src="../../assets/videos/test.mp4"
      width="100%"
      height="50%"
      class="videoRef"
    ></video>
    <div class="control">
      <div class="constro-btn" @click="handlePlay">播放</div>
      <div class="constro-btn" @click="handlePause">暂停</div>
      <div class="constro-btn" @click="handleFullPage">全屏</div>
    </div>
    <input type="range" />
    <progress></progress>
  </div>
</template>

<script>
import player from './player'
export default {
  data() {
    return {
      play: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.play = new player('.videoRef')
    })
  },
  methods: {
    handlePlay() {
      this.play.play()
    },

    handlePause() {
      this.play.pause()
    },

    handleFullPage() {
      this.play.fullScreen()
    },
  },
}
</script>

<style lang="scss" scoped>
.video-stage {
  width: 100%;
  height: 100%;
}
.constro-btn {
  margin-left: 20px;
}
.control {
  color: white;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  border: 1px solid red;
}

progress {
  width: 160px;
  height: 20px;
  border: 1px solid #0064b4;
  background-color: #e6e6e6;
  color: #0064b4; /*IE10*/
}

progress::-moz-progress-bar {
  background: #0064b4;
}
progress::-webkit-progress-bar {
  background: #e6e6e6;
}
progress::-webkit-progress-value {
  background: #0064b4;
}

progress::-webkit-progress-inner-element {
  border-radius: 4px;
}
progress::-webkit-progress-value {
  border-radius: 4px;
}
progress::-webkit-progress-bar {
  border-radius: 4px;
}
</style>
