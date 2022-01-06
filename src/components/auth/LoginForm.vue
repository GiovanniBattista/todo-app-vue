<template>
  <div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input class="form-control" type="text" id="username" name="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"  id="password" type="password" name="password" v-model="password">
      </div>

      <div v-if="error" class="alert alert-danger">
        {{ error.message }}
      </div>

      <button class="btn btn-primary" type="submit">Login</button>

      <div class="text-center py-3">
        <router-link to="/sign-up">Go to sign up</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {  

  // beforeRouteEnter(to, from) {
  //   console.log("Component beforeRouteEnter: ", to, from)
  // },

  //=== Local State (local reactive properties) ===
  data() {
    return {
      username: '',
      password: '',

      error: null,
    }
  },

  // === Non-Reactive Properties (instance properties independent of the reactivity system) ===
  methods: {
    
    async login() {
      this.error = null

      try
      {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
        this.$router.push('/todos')
      } catch ( error ) {
        this.error = error
      }
    },
  }  
}
</script>

<style lang="scss" scoped>

</style>