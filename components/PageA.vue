<template>
  <div class="page-a">
    <CoreHeader>
      <img src="@/assets/img/planetlearn-logo.png" alt="PlanetLearn">
    </CoreHeader>
    <main class="page-a__container">
      <div class="page-a__content">
        <h1 class="page-a__content__title">Start your learning journey now</h1>
        <p class="page-a__content__text">Get a <span class="orange bold">Planet</span><span class="bold">Learn</span> plan to rock self-learning</p>
        <BaseButton @click.native="isModalOpened = true">Get my plan</BaseButton>
        <TrialContent />
      </div>
      <div class="page-a__card__container">
        <img class="page-a__card__asteroid" src="@/assets/img/asteroid.png" alt="Asteroid">
        <div class="page-a__card">
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
  name: 'PageA',
  data: () => ({
    isModalOpened: false
  }),
  created() {
    this.setTheme('light')
  },
  methods: {
    ...mapMutations(['setTheme'])
  }
}
</script>

<style lang="scss">
.page-a {
  @include mainPage;
  font-family: 'Proxima Nova', sans-serif;
  background-image: url("@/assets/img/planets-bg.png");

  &__content{
    padding-top: 15px;

    &__title {
      font-size: 48px;
      font-weight: 800;
      font-family: 'Proxima Nova Extrabold', sans-serif;
    }
    &__text {
      font-family: 'Proxima Nova Bold', sans-serif;
    }
  }

  &__card {
    background-color: #ffffff;
    border: 1px solid #CDCDCD;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
    border-radius: 12px;

    &__asteroid {
      position: absolute;
      top: -58px;
      right: 20px;
      @media screen and (max-width: 576px) {
        display: none;
      }
    }
  }
}
</style>
