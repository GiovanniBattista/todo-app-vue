import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from './components/todos/TodoList'
import LoginForm from './components/auth/LoginForm'
import SignUpForm from './components/auth/SignUpForm'
import AppLogout from './components/auth/AppLogout'

function publicRouteGuard (_, __, next) {
  if (store.getters.isAuthenticated) {
    next({ name: 'Todos' }) // cannot enter public route if authenticated
  } else {
    next()
  }
}

function loggedInRouteGuard (_, __, next) {
  if (store.getters.isAuthenticated) {
    next()
  } else {
    next(false) // cannot enter logged in guard if NOT authenticated
  }
}

const routes = [
  { path: '/', component: LoginForm, beforeEnter: publicRouteGuard },
  { path: '/sign-up', component: SignUpForm, beforeEnter: publicRouteGuard },
  { path: '/logout', component: AppLogout, beforeEnter: loggedInRouteGuard },
  { path: '/todos', component: TodoList, name: 'Todos', beforeEnter: loggedInRouteGuard }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



// router.beforeEach((to, from) => {
//   console.log("beforeEach: ", to, from)
// })

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
