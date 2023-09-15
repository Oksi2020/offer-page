<template>
  <BaseModal :theme="theme" @close="$emit('close')">
    <template #header>
      <h3 class="payment__title" :class="theme">Payment method</h3>
    </template>
    <template #main>
      <div class="payment__buttons">
        <button class="payment__buttons_paypal">
          <img src="@/assets/img/pay-pal.svg" alt="PayPal" /> Buy now
        </button>
        <button class="payment__buttons_google">
          <img src="@/assets/img/google-pay.svg" alt="GooglePay" /> Pay
        </button>
      </div>
      <p class="payment__separator" :class="theme">
        <span>Or</span>
      </p>
      <form class="payment__form">
        <div class="payment__form__field" :class="theme">
          <label for="card-number">Card number</label>
          <input
            v-model="creditCardNumber"
            class="input"
            id="card-number"
            type="text"
            maxlength="19"
            placeholder="•••• •••• •••• ••••"
            @input="formatCreditCardNumber"
            @keydown="handleKeyDown"
          >
          <img src="@/assets/img/Mastercard.png" alt="Mastercard">
        </div>
        <div class="payment__form__block">
          <BaseDropdown v-model="selectedMonth" :options="months" :class="theme" title="Month" />
          <BaseDropdown v-model="selectedYear" :options="years" :class="theme" title="Year" />
          <div class="payment__form__field" :class="theme">
            <label for="cvc">CVC</label>
            <input
              v-model="cvc"
              class="input"
              id="cvc"
              type="password"
              placeholder="•••"
              maxlength="3"
              @keydown="handleKeyDown"
            >
          </div>
        </div>
      </form>
    </template>
    <template #nav>
      <BaseButton :type="buttonType" :class="{'full-width': theme === 'dark', disabled: !isSubmitActive}">Submit</BaseButton>
      <button class="payment__close" @click="$emit('close')">Close</button>
    </template>
  </BaseModal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Payment',
  data: () => ({
    years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    months: ['December', 'January', 'February', 'March', 'April', 'May', 'Jule', 'July', 'August', 'September', 'October', 'November'],
    creditCardNumber: '',
    selectedMonth: '',
    selectedYear: '',
    cvc: ''
  }),
  computed: {
    ...mapGetters(['theme']),
    buttonType() {
      return this.theme === 'light' ? 'black' : 'blue'
    },
    isSubmitActive() {
      const isCreditCardNumberValid = this.creditCardNumber.length === 19
      const isCVCValid = this.cvc.length === 3
      return isCreditCardNumberValid && isCVCValid && this.selectedMonth && this.selectedYear
    }
  },
  methods: {
    computedMonth (month) {
      return month[0].toUpperCase() + month.slice(1)
    },
    closeModal() {
      this.$bvModal.hide('payment')
    },
    formatCreditCardNumber() {
      this.creditCardNumber = this.creditCardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    },
    handleKeyDown(event) {
      if (!/^\d$|^Backspace$|^Delete$/.test(event.key)) {
        event.preventDefault();
      }
    }
  }
}
</script>

<style lang="scss">
.payment {
  color: black;

  &__title {
    text-align: center;
    font-size: 21px;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 24px;
    &.dark {
      font-weight: 600;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &_paypal {
      @include button;
      background-color: $orange-light;
      text-transform: uppercase;
      color: #000000;
    }
    &_google {
      @include button;
      background-color: #FFFFFF;
      border: 1px solid #E1E1E1;
      text-transform: uppercase;
      color: #000000;
    }
  }

  &__separator {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.40);
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    margin: 16px 0;

    span {
      display: inline-block;
      vertical-align: middle;
    }
    &:before,
    &:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      height: 2px;
      background-color: #D2D2D2;
      position: relative;
    }
    &:before {
      margin-left: -100%;
      left: -14px;
    }
    &:after {
      margin-right: -100%;
      right: -14px;
    }
    &.dark {
      color: #FFFFFF;
      &:before, &:after {
        background-color: #617398;
      }
    }
  }

  &__form {
    &__field {
      @include inputField;
      width: 100%;
      .input {
        width: 100%;
      }
      img {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }

    }
    &__block {
      margin-top: 30px;
      display: flex;
      gap: 10px;
      .dropdown {
        width: 100%;
      }
    }
  }

  &__close {
    padding: 10px;
  }
}
</style>
