<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "~bootstrap-icons/font/bootstrap-icons.css";

  .form-group {
    @extend .mb-3;
  }
</style>
