<template>
  <button :class="['base-button', type]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'black',
      validator (value) {
        return ['black', 'blue', 'white-green', 'gray-blue'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss">
.base-button {
  @include button;
  max-width: 270px;

  &.full-width {
    max-width: none;
  }
  &.disabled {
    pointer-events: none;
  }

  &.black {
    background-color: #000000;
    color: #ffffff;
    &.disabled {
      background-color: #D2D2D2;
    }
    &:hover {
      background-color: $green-light;
    }
  }
  &.blue {
    background-color: #ffffff;
    color: $dark-blue;
    &:hover {
      background-color: $purple;
      color: #ffffff;
    }
    &.disabled {
      background-color: $gray;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  &.white-green {
    background-color: #ffffff;
    color: $green;
    border: 1px solid #D2D5DA;
  }
  &.gray-blue {
    background: rgba(0, 0, 0, 0.20);
    color: $blue-light;
  }
}
</style>
