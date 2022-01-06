<template>
  <app-navigation-bar></app-navigation-bar>
  
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
import TodoListForm from './TodoListForm'
import AppNavigationBar from '../shared/AppNavigationBar.vue'

export default {
  // === template dependencies (assets used in the template) ===
  components: { TodoListItem, TodoListForm, AppNavigationBar },

  // NOTE: if implementing further functionality (e.g. sorting, filtering, etc)
  // use composition API in own <script setup> tag.
  // Only this should be needed then

  // === local state (local reactive properties) ===
  computed: {
    todos() {
      // use todos.todos because the namespace of the todos module is 'todos'
      // and the state property itself is named todos
      return this.$store.state.todos.todos
    }
  },

  mounted() {
    this.$store.dispatch('loadTodos')
  },

  methods: {
    async createTodo( todoTitle ) {
      const createTodo = {
        title: todoTitle
      }
      this.$store.dispatch('createTodo', { createTodo })
    },
    async toggleDone( todo2Toggle ) {
      const toggledTodo = {
        ...todo2Toggle,
        done: !todo2Toggle.done
      }
      this.$store.dispatch('toggleDone', { toggledTodo })
    },
    async deleteTodo( id ) {
      this.$store.dispatch('deleteTodo', { id })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>