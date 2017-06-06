<template lang="pug">
  .week
    day(v-for="(day, index) in weeks[currentWeek]",:dayWeek="index",:dayMonth="index", :lessons="day",:key="index")
</template>

<script>
  import day from './Day.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'timetable',
    computed: {
      ...mapState('home/timetable', [
        'weeks',
        'currentWeek'
      ])
    },
    components: {
      day
    }
  }
</script>

<style lang="stylus" scoped>
  .week
    width 100%
    .day
      width 100%
</style>
