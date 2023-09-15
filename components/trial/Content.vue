<template>
  <div class="trial-content">
    <ul class="trial-content__list">
      <li class="trial-content__list__item" :class="[theme, {'light-blue': theme === 'dark'}]">
        Exclusive access to <span :class="[{ orange: theme === 'light'}, 'bold']">350+</span> learning programs
      </li>
      <li class="trial-content__list__item" :class="[theme]">
        Personalized course plan
      </li>
      <li class="trial-content__list__item" :class="[theme]">
        Comfy learning schedule made by you
      </li>
      <li class="trial-content__list__item" :class="[theme, {'light-blue': theme === 'dark'}]">
        <span :class="[{ orange: theme === 'light'}, 'bold']">24/7</span> tutor support in a secure chat
      </li>
      <li class="trial-content__list__item" :class="[theme]">
        Lifetime access to materials
      </li>
    </ul>
    <BaseButton :type="buttonType" class="full-width">
      <img :src="require(theme === 'light' ? '@/assets/img/lock.svg' : '@/assets/img/lock-blue.svg')">Safe & secure payment
    </BaseButton>
    <p class="trial-content__note">
      $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
      automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing,
      you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TrialList',
  computed: {
    ...mapGetters(['theme']),
    buttonType () {
      return this.theme === 'light' ? 'white-green' : 'gray-blue'
    }
  }
}
</script>

<style lang="scss">
.trial-content {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    &__item {
      font-family: 'Proxima Nova', sans-serif;
      font-size: 16px;

      &::before {
        vertical-align: middle;
        margin-right: 10px;
      }
      &.dark:before {
        content: url("~@/assets/img/star-blue.svg");
      }
      &.light:before {
        content: url("~@/assets/img/star-orange.svg");
      }
    }
  }
  &__note {
    margin: 24px 0 0;
    font-size: 12px;
    text-align: center;
    opacity: .5;
  }
}
</style>
