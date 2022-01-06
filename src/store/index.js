import { createStore } from 'vuex'
import loginService from '/api/LoginService'


const store = createStore({
  state() {
    return {
      accessToken: localStorage.getItem('access_token')
    }
  },

  getters: {
    isAuthenticated (state) {
      return state.accessToken !== null
    }
  },

  mutations: {
    authenticate (state, payload) {
      console.log("MUTATION accessToken ", payload)
      state.accessToken = payload.accessToken
      localStorage.setItem('access_token', state.accessToken)
    },

    unauthenticate( state ) {
      console.log('MUTATION accessToken ')
      state.accessToken = null
      localStorage.removeItem('access_token')
    }
  },

  actions: {
    async login ( {commit}, payload ) {
      const accessToken = await loginService.login(payload.username, payload.password)
      console.log("ACTIONS accessToken ", accessToken)
      commit('authenticate', {
        accessToken: accessToken
      })
    },

    logout ( {commit} ) {
      commit('unauthenticate')
    }
  }
})

export default store