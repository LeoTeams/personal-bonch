<template lang="pug" >
  .schedule
    loading-indicator(v-if="isLoading").loading
    day(v-else="" v-for="(day, index) in data[currentWeek]",:dayWeek="index",:dayMonth="day.dayOfMonth", :lessons="day.lessons",:key="index")
</template>

<script>
  import day from './Day.vue'
  import LoadingIndicator from '../../UI/LoadingIndicator'

  const timeCheckDelay = 1000 * 60
  
  export default {
    name: 'schedule',
    data () {
      return {
        interval: 0,
        lastTimeCheck: 0
      }
    },
    computed: {
      isLoading () {
        return this.$store.getters.isScheduleLoading
      },
      data () {
        return this.$store.getters.schedule
      },
      currentWeek () {
        return this.$store.getters.currentWeek
      }
    },
    components: {
      day,
      'loading-indicator': LoadingIndicator
    },
    mounted () {
      this.interval = setInterval(function () {
        if (this.lastTimeCheck && new Date(new Date() - this.lastTimeCheck).getDay() > 0) {
          this.$forceUpdate()
        }
        this.lastTimeCheck = new Date()
      }.bind(this), timeCheckDelay)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../styles/config.styl"

  .schedule
    width 100%
    display flex
    flex-direction column
    align-items center
    padding 1rem 5rem
    margin-top 2rem
    min-height 100%
    .loading
      margin auto
    .day
      width 100%
      margin-bottom 5rem


  @media screen and (max-width: mobile-edge)
    .schedule
      padding-left 0
      padding-right 0



</style>
