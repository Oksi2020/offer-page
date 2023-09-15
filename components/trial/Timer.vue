<template>
  <div class="timer" :class="{expired: !countdown}">
    <div class="timer__content">
      <h3 class="timer__content__title" :class="{ 'light-blue': theme === 'dark'}">
        3-day trial for <span :class="['bold', { orange: theme === 'light'}]">$0.99</span>
      </h3>
      <template v-if="countdown">
        <h4 class="timer__content__subtitle">Then $9.99</h4>
        <p class="timer__content__text_crossed">$39.99/week</p>
      </template>
      <template v-else>
        <h4 class="timer__content__subtitle">Then $39.99/week</h4>
      </template>
    </div>
    <div v-if="countdown" class="timer__item">
      <BaseTimer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Timer',
  computed: {
    ...mapGetters(['theme', 'countdown'])
  }
}
</script>

<style lang="scss">
.timer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &.expired {
    text-align: center;

    @media screen and (max-width: 576px) {
      justify-content: center;
    }
  }
  &__content {
    &__title {
      font-family: 'Proxima Nova Bold', sans-serif;
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
      @media screen and (max-width: 576px) {
        font-size: 18px;
      }
    }
    &__subtitle {
      font-size: 20px;
      font-weight: 600;
      @media screen and (max-width: 576px) {
        font-size: 16px;
      }
    }
    &__text_crossed {
      font-size: 16px;
      font-weight: 600;
      text-decoration: line-through;
      opacity: .4;
      margin-bottom: 0;
      @media screen and (max-width: 576px) {
        font-size: 14px;
      }
    }
  }
}
</style>
