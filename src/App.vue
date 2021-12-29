<template>
  <todo-list></todo-list>
</template>

<script>

import TodoList from "./components/todos/TodoList";

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "~bootstrap-icons/font/bootstrap-icons.css";

  .form-group {
    @extend .mb-3;
  }
</style>
