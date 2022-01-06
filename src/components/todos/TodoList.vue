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
import todoService from '/api/TodoService'
import AppNavigationBar from '../shared/AppNavigationBar.vue'

export default {
  // === template dependencies (assets used in the template) ===
  components: { TodoListItem, TodoListForm, AppNavigationBar },

  // NOTE: if implementing further functionality (e.g. sorting, filtering, etc)
  // use composition API in own <script setup> tag.
  // Only this should be needed then

  // === local state (local reactive properties) ===
  data() {
    return {
      todos: []
    }      
  },

  mounted() {
    this.listTodos()
  },

  methods: {
    async listTodos() {
      const response = await todoService.fetchAll()
      this.todos = response.data
    },
    async createTodo( todoTitle ) {
      const todo = {
        title: todoTitle
      }
      const response = await todoService.create(todo)
      const createdTodo = response.data
      this.todos.push(createdTodo)
    },
    async toggleDone( todo2Toggle ) {
      const toggledTodo = {
        ...todo2Toggle,
        done: !todo2Toggle.done
      }
      const response = await todoService.update(toggledTodo)
      const updatedTodo = response.data

      const idx2Update = this.todos.findIndex(todo => todo.id === todo2Toggle.id);
      if (idx2Update >= 0) {
        this.todos[idx2Update].title = updatedTodo.title
        this.todos[idx2Update].done = updatedTodo.done
      }

    },
    async deleteTodo( id ) {
      await todoService.delete(id);
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>