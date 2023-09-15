<template>
  <div class="countdown" :class="{warn: countdown <= 10}">
    <span class="countdown__progress" :class="theme" :style="{ width: timerProgress }"></span>
    <span class="countdown__text">{{ timerOutput }}</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import nuxtStorage from 'nuxt-storage';

export default {
  data: () => ({
    fullTime: 0,
    timer: null
  }),
  computed: {
    ...mapGetters(['countdown', 'theme']),
    timerOutput () {
      const minutes = Math.floor(this.countdown / 60)
      const seconds = this.countdown - minutes * 60
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    },
    timerProgress () {
      return this.countdown / this.fullTime * 100 + '%'
    }
  },
  created() {
    this.fullTime = this.countdown
    this.startTimer()
    const storedCountdown = nuxtStorage.localStorage.getData('countdown')

    if (storedCountdown || storedCountdown === 0) {
      this.setCountdown(storedCountdown)
    }
  },
  methods: {
    ...mapMutations(['decreaseCountdown', 'setCountdown']),
    startTimer () {
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.decreaseCountdown()
          nuxtStorage.localStorage.setData('countdown', this.countdown)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.countdown {
  width: 160px;
  height: 60px;
  background-color: #000000;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease;
  &.warn {
    box-shadow: 0px 0px 6px 0px rgba(255, 0, 0, 0.80);
  }

  &__progress {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $green-light;
    border-radius: 10px;
    transition: all 0.3s ease;
    &.dark {
      background-color: $blue;
    }
  }
  &__text {
    position: static;
    z-index: 99;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 600;
  }
  @media screen and (max-width: 576px) {
    width: 110px;
    height: 47px;
  }
}
</style>
