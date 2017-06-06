
<template lang="pug">
  .App
    navigation-bar
    main
      time-table
</template>

<script>
  import { mapState } from 'vuex'
  import TimeTable from './timetable/TimeTable.vue'
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
    margin auto
    margin-top headerHigh
    max-width mainMaxWidth
    display flex
    flex-direction column
    align-items center
</style>
