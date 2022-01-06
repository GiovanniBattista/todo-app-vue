import todoService from '/api/TodoService'

export default {

  state() {
    return {
      todos: []
    }
  },

  mutations: {
    todos (state, payload) {
      console.log("todos ", payload.todos)
      state.todos = payload.todos
    },
    addTodo (state, payload) {
      state.todos.push(payload.todo)
    },
    updateTodo(state, payload) {
      const todo2Toggle = payload.todo
      const idx2Update = state.todos.findIndex(todo => todo.id === todo2Toggle.id);

      if (idx2Update >= 0) {
        state.todos[idx2Update].title = todo2Toggle.title
        state.todos[idx2Update].done = todo2Toggle.done
      }
    },
    deleteTodo(state, payload) {
      const id = payload.id
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },

  actions: {
    async loadTodos( {commit} ) {
      const response = await todoService.fetchAll()
      console.log('load todos', response.data)
      commit('todos', { 
        todos: response.data 
      })
    },

    async createTodo( {commit}, payload) {
      const response = await todoService.create(payload.createTodo)
      commit('addTodo', { 
        todo: response.data 
      })
    },

    async toggleDone( {commit}, payload) {
      const response = await todoService.update(payload.toggledTodo)

      commit('updateTodo', {
        todo: response.data
      })
    },

    async deleteTodo( {commit}, payload) {
      await todoService.delete(payload.id);
      commit('deleteTodo', {
        id: payload.id
      })
    }
  }
}