<template>
  <li class="list-group-item" @click="$emit('toggleDone', this.todoItem.id)">
    <div class="d-flex w-100 justify-content-between align-items-center">
      <div class="d-flex">
        <div class="me-2">
          <span v-if="todoItem.done"><i class="bi bi-square"></i></span>
          <span v-if="!todoItem.done" class="text-success"><i class="bi bi-check-square"></i></span>
        </div>

        {{ todoItem.title }}
      </div>

      <button 
        class="btn btn-danger btn-sm"
        @click.stop="$emit('deleteTodo', this.todoItem.id)">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </li>
</template>

<script>
export default {

  // === the interface to the component ===
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },
  emits: ['toggleDone', 'deleteTodo']

}
</script>

<style lang="sass" scoped>

</style>