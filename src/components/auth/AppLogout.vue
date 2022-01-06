<template>
  <div class="fs-1 text-center">👋 Bye bye</div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('logout')
    
    setTimeout(() => {
      this.$router.push('/') 
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>

</style>