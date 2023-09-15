<template>
  <div class="dropdown">
    <label>{{ title }}</label>
    <div class="dropdown__selected input" :class="{ open: isOpen }" @click="isOpen = !isOpen">
      {{ selected }} <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>
    <div class="dropdown__items" :class="{ selectHide: !isOpen }">
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="{ active: option === value }"
        @click="
          isOpen = false;
          $emit('input', option);
        "
      >
        {{ option }}
        <font-awesome-icon v-if=" option === value" :icon="['fas', 'check']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Select',
    },
    options: {
      type: Array,
      required: false,
      default: [],
    },
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    selected() {
      return this.value || 'Select'
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  @include inputField;

  &.dark {
    .dropdown__selected {
      color: #FFFFFF;
      &.open {
        border-color: $blue;
      }
    }
    .dropdown__items {
      background-color: $gray;
      color: #FFFFFF;
      div {
        border-color: #D2D5DA;
        &.active {
          background: $blue;
          color: #FFFFFF;
          border-color: $blue;
        }
      }
    }
  }
  &__selected {
    color: #6C727F;
    justify-content: space-between;

    &.open {
      border-radius: 6px 6px 0px 0px;
      border-color: $green-light;
    }
  }

  &__items {
    color: #6C727F;
    width: 100%;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    background: #FFF;
    font-size: 12px;

    div {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border: 1px solid #D2D2D2;
      border-bottom: none;
      &.active {
        background: $green-light;
        color: #FFFFFF;
        border-color: $green-light;
      }
    }
  }
  .selectHide {
    display: none;
  }
}
</style>
