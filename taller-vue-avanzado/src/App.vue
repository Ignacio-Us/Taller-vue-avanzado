<template>
  <div>
    <CrudUser/>
  </div>
</template>

<script>

import CrudUser from './components/CrudUser.vue';

export default {
  name: 'App',
  components: {
    CrudUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
