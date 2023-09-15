export const state = () => ({
  theme: 'light',
  countdown: 180
})

export const getters = {
  theme: state => state.theme,
  countdown: state => state.countdown
}

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme
  },
  setCountdown(state, countdown) {
    state.countdown = countdown
  },
  decreaseCountdown(state) {
    state.countdown--
  }
}
