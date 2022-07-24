<template>
  <div
    class="layout"
    :class="`layout--${pageName}`"
  >
    <div class="layout-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: 'Page',
    }
  }
}
</script>

<style lang="scss">
  .layout {
    background: $light-color;
  }
</style>
