<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/todos">Todo List</router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/logout">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>