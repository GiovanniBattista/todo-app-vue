<template>
  <form class="d-flex" @submit.prevent="onDone">
    <input class="form-control me-2" v-model="title">
    <button class="btn btn-primary" type="submit">Add</button>
  </form>
</template>

<script>
export default {

  // === the interface to the component ===
  emits: ['createTodo'],

  // === local state (lcoal reactive properties) ===
  data() {
    return {
      title: '',
    }
  },

  // === non-reactive properties ===
  methods: {

    onDone() {
      if (this.title) {
        this.$emit('createTodo', this.title)
        this.title = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>