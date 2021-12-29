<template>
  <ul class="list-group container">
    <todo-list-item 
      v-for="todo in todos" 
      :key="todo.id"
      :todo-item="todo"
      @delete-todo="deleteTodo"
      @toggle-done="toggleDone"
      ></todo-list-item>

      <todo-list-form
        @create-todo="createTodo"
      ></todo-list-form>
  </ul>
</template>

<!-- According to the Vue.js style guide, we have to user multi-word component names
so we cannot just name the component Todos.vue
https://v3.vuejs.org/style-guide/#multi-word-component-names-essential
-->

<script>
import TodoListItem from './TodoListItem'
import TodoListForm from './TodoListForm';

export default {
  // === template dependencies (assets used in the template) ===
  components: { TodoListItem, TodoListForm },

  // === local state (local reactive properties) ===
  data() {
    return {
      todosCounter: 10,

      todos: [{
        id: 1,
        title: "Buy milk",
        done: false
      }, {
        id: 2,
        title: "Hash me",
        done: true
      },{
        id: 3,
        title: "Allow this",
        done: false
      }]
    }
  },

  methods: {
    createTodo( todoTitle ) {
      this.todos.push({
        id: this.todosCounter++,
        title: todoTitle,
      })
    },
    toggleDone( id ) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      })
    },
    deleteTodo( id ) {
      this.todos = this.todos.filter( todo => todo.id !== id);
    }
  }
}
</script>

<style lang="sass" scoped>

</style>