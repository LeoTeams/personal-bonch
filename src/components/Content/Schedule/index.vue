<template lang="pug" >
  .schedule
    loading-indicator(v-if="isLoading").loading
    day(v-else="" v-for="(day, index) in data[currentWeek]",:dayWeek="index",:dayMonth="index", :lessons="day",:key="index")
</template>

<script>
  import day from './Day.vue'
  import LoadingIndicator from '../../UI/LoadingIndicator'
//  import {mapGetters} from 'vuex'

  export default {
    name: 'schedule',
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
    }
  }
</script>

<style lang="stylus" scoped>
  .schedule
    width 100%
    display flex
    flex-direction column
    align-items center
    padding 1rem 5rem
    min-height 100%
    .loading
      margin auto
    .day
      width 100%
      margin-bottom 5rem

</style>
