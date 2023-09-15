<template>
  <header class="header">
    <div class="header__container">
      <slot></slot>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
.header {
  width: 100%;

  &__container {
    padding: 8px 20px;
    max-width: 1210px;
    margin: 0 auto;
  }
}
</style>
