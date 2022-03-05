<template>
  <div id="app">
    <b-container fluid class="m-0 p-0">
      <Nav />
      <div class="height_nav"></div>
        <router-view />
    </b-container>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue'
  export default {
    name: 'App',
    components: {
      Nav
    }
  }
</script>


<style lang="sass" scoped>
  .height_nav
    height: 60px
</style>