<template>
  <div class="page-b">
    <CoreHeader>
      <img src="@/assets/img/smartstudy-logo.png" alt="SmartStudy">
    </CoreHeader>
    <main class="page-b__container">
      <div class="page-b__content">
        <h1 class="page-b__content__title">
          <span class="blue">Start</span> your learning journey
          <span class="blue">now</span>
        </h1>
        <p class="page-b__content__text">Get a <span class="blue">Smart</span><span class="bold">Study</span> plan to rock self-learning</p>
        <BaseButton type="blue" @click.native="isModalOpened=true">Get my plan</BaseButton>
        <TrialContent />
      </div>
      <div class="page-b__card__container">
        <img class="page-b__card__ball" src="@/assets/img/ball.png" alt="Ball">
        <img class="page-b__card__rocket" src="@/assets/img/rocket.png" alt="Rocket">
        <div class="page-b__card">
          <TrialTimer />
          <TrialContent />
        </div>
      </div>
    </main>
    <TrialPayment v-if="isModalOpened" @close="isModalOpened=false" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PageB',
  data: () => ({
    isModalOpened: false
  }),
  created() {
    this.setTheme('dark')
  },
  methods: {
    ...mapMutations(['setTheme'])
  }
}
</script>

<style lang="scss">
.page-b {
  @include mainPage;
  background-image: url("@/assets/img/blue-bg.png");
  color: #ffffff;

  &__content {
    &__title {
      font-size: 42px;
      font-weight: 400;
      color: #ffffff;
      text-transform: uppercase;
      font-family: 'Intro', sans-serif;

      @media screen and (max-width: 576px) {
        font-size: 30px;
        text-transform: none;
      }
    }
    @media screen and (max-width: 576px) {
      @include darkCard;
    }
  }
  &__card {
    @include darkCard;
    z-index: 9;

    &__ball {
      position: absolute;
      top: -40px;
      left: -40px;
      @media screen and (max-width: 576px) {
        display: none;
      }
    }
    &__rocket {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -37%;
      z-index: 9;
      @media screen and (max-width: 576px) {
        display: none;
      }
    }
  }
}
</style>
