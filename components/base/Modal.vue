<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper" @click="$emit('close')">
        <div class="modal__container" :class="theme" @click.stop>
          <header class="modal__header">
            <slot name="header"></slot>
          </header>
          <main class="modal__content">
            <slot name="main"></slot>
          </main>
          <nav class="modal__navigation">
            <slot name="nav"></slot>
          </nav>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BaseModal',
  computed: {
    ...mapGetters(['theme'])
  }
}
</script>

<style lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 12px;
  }

  &__container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding: 24px 16px 16px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;

    &.dark {
      background-color: #4D5E82;
    }
  }
  &__content {
    margin-bottom: 40px;
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }

  &-enter &-container,
  &-leave-active &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
