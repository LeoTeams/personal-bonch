
<template lang="pug">
  .App
    navigation-bar
    main
      h1 It's home page {{appName}}
      time-table
</template>

<script>
  import { mapState } from 'vuex'
  import TimeTable from './TimeTable.vue'
  import NavigationBar from './NavigationBar.vue'

  export default {
    name: 'home',
    computed: mapState('home', [
      'appName'
    ]),
    components: {
      TimeTable,
      NavigationBar
    }
  }
</script>

<style lang="stylus" scoped>
  @import "./styles/config.styl"

  main
    margin-top headerHigh
  h1
    font-size 3em
    margin auto
</style>
